<?php
/**
 * Devorica Contact Form Handler
 * Uses PHP's mail() via SMTP relay configured on cPanel hosting.
 * Recipient: support@devorica.com
 *
 * Deploy this file alongside the built dist/ contents in public_html.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://devorica.com');
header('Access-Control-Allow-Methods: POST');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot check
if (!empty($_POST['hp'])) {
    http_response_code(200); // Silently succeed for bots
    echo json_encode(['success' => true]);
    exit;
}

// Sanitize & validate
$name       = trim(strip_tags($_POST['name'] ?? ''));
$email      = trim(strip_tags($_POST['email'] ?? ''));
$phone      = trim(strip_tags($_POST['phone'] ?? ''));
$projectType = trim(strip_tags($_POST['projectType'] ?? ''));
$budget     = trim(strip_tags($_POST['budget'] ?? ''));
$message    = trim(strip_tags($_POST['message'] ?? ''));

$errors = [];

if (empty($name))    $errors[] = 'Name is required.';
if (empty($email))   $errors[] = 'Email is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
if (empty($message)) $errors[] = 'Message is required.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['errors' => $errors]);
    exit;
}

$to      = 'support@devorica.com';
$subject = "New Enquiry from {$name} - Devorica Website";

$body  = "New contact form submission from devorica.com\n\n";
$body .= "Name:         {$name}\n";
$body .= "Email:        {$email}\n";
$body .= "Phone:        {$phone}\n";
$body .= "Project Type: {$projectType}\n";
$body .= "Budget Range: {$budget}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: noreply@devorica.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail send failed. Please try WhatsApp or email directly.']);
}
