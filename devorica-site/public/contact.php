<?php
/**
 * Devorica Contact Form Handler
 * Sends contact form messages through authenticated SMTP.
 *
 * Required server env:
 *   SMTP_PASS=email account password for demo@asmarketingbusiness.com
 *
 * Optional server env:
 *   MAIL_TO=recipient inbox, defaults to support@devorica.com
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://devorica.com');
header('Access-Control-Allow-Methods: POST');

const SMTP_HOST = 'mail.bayloz.com';
const SMTP_PORT = 465;
const SMTP_USER_DEFAULT = 'norep@bayloz.com';
const SMTP_FROM_DEFAULT = 'norep@bayloz.com';
const SMTP_PASS_DEFAULT = 'Jovayer1234';
const SMTP_FROM_NAME = 'Devorica';

function smtp_read($socket): string
{
    $data = '';
    while ($line = fgets($socket, 515)) {
        $data .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }
    return $data;
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed: ' . $response);
    }

    return $response;
}

function mail_header_encode(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function send_smtp_mail(string $to, string $replyTo, string $subject, string $body): void
{
    $username = getenv('SMTP_USER') ?: SMTP_USER_DEFAULT;
    $from = getenv('SMTP_FROM') ?: SMTP_FROM_DEFAULT;
    $password = getenv('SMTP_PASS') ?: SMTP_PASS_DEFAULT;
    if ($password === '') {
        throw new RuntimeException('SMTP password is not configured.');
    }

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ]);

    $socket = stream_socket_client(
        'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!$socket) {
        throw new RuntimeException("SMTP connection failed: {$errstr} ({$errno})");
    }

    stream_set_timeout($socket, 20);

    try {
        $greeting = smtp_read($socket);
        if ((int) substr($greeting, 0, 3) !== 220) {
            throw new RuntimeException('SMTP greeting failed: ' . $greeting);
        }

        smtp_command($socket, 'EHLO devorica.com', [250]);
        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($username), [334]);
        smtp_command($socket, base64_encode($password), [235]);
        smtp_command($socket, 'MAIL FROM:<' . $from . '>', [250]);
        smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $headers = [
            'From: ' . mail_header_encode(SMTP_FROM_NAME) . ' <' . $from . '>',
            'Reply-To: ' . $replyTo,
            'To: ' . $to,
            'Subject: ' . mail_header_encode($subject),
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'X-Mailer: Devorica SMTP Contact Handler',
        ];

        $bodyFormatted = str_replace(["\r\n", "\r", "\n"], "\n", $body); // Normalize to \n first
        $bodyFormatted = str_replace("\n", "\r\n", $bodyFormatted); // Then convert all to \r\n
        $message = implode("\r\n", $headers) . "\r\n\r\n" . $bodyFormatted;
        $message = str_replace("\r\n.", "\r\n..", $message);

        fwrite($socket, $message . "\r\n.\r\n");
        $response = smtp_read($socket);
        if ((int) substr($response, 0, 3) !== 250) {
            throw new RuntimeException('SMTP send failed: ' . $response);
        }

        smtp_command($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (!empty($_POST['hp'])) {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

$name        = trim(strip_tags($_POST['name'] ?? ''));
$email       = trim(strip_tags($_POST['email'] ?? ''));
$phone       = trim(strip_tags($_POST['phone'] ?? ''));
$projectType = trim(strip_tags($_POST['projectType'] ?? ''));
$budget      = trim(strip_tags($_POST['budget'] ?? ''));
$message     = trim(strip_tags($_POST['message'] ?? ''));

$errors = [];

if (empty($name)) $errors[] = 'Name is required.';
if (empty($email)) $errors[] = 'Email is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
if (empty($message)) $errors[] = 'Message is required.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['errors' => $errors]);
    exit;
}

$admin_to = 'jovayerhossain0@gmail.com';
$firstName = explode(" ", trim($name))[0] ?: 'there';

// Generate Admin Email HTML
ob_start();
require __DIR__ . '/emails/admin_template.php';
$admin_body = ob_get_clean();
$admin_subject = "New Project Enquiry from {$name}";

// Generate User Email HTML
ob_start();
require __DIR__ . '/emails/client_template.php';
$user_body = ob_get_clean();
$user_subject = "Welcome to Devorica – We've Received Your Enquiry";

try {
    // Send to Admin
    send_smtp_mail($admin_to, $email, $admin_subject, $admin_body);
    
    // Send to User
    send_smtp_mail($email, $admin_to, $user_subject, $user_body);

    echo json_encode(['success' => true]);
} catch (Throwable $e) {
    error_log('[contact.php] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Mail send failed. Please try WhatsApp or email directly.']);
}
