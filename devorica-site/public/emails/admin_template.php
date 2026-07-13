<?php
// Required variables: $name, $email, $phone, $projectType, $budget, $message
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead - Devorica</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #F9F9F9; color: #333333; margin: 0; padding: 40px 20px; }
        .container { max-width: 650px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E5E5E5; padding: 35px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        h1 { color: #000000; font-size: 22px; margin-top: 0; border-bottom: 1px solid #EEEEEE; padding-bottom: 15px; margin-bottom: 25px; }
        .box { background-color: #F9F9F9; border: 1px solid #EEEEEE; padding: 20px; margin: 20px 0; border-radius: 4px; }
        .box p { margin: 0 0 12px 0; font-size: 15px; color: #000000; }
        .box p:last-child { margin-bottom: 0; }
        .box strong { color: #666666; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 3px; }
        a { color: #E85002; text-decoration: none; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Project Enquiry</h1>
        <div class="box">
            <p><strong>Client Name</strong> <?= htmlspecialchars($name) ?></p>
            <p><strong>Email Address</strong> <a href="mailto:<?= htmlspecialchars($email) ?>"><?= htmlspecialchars($email) ?></a></p>
            <p><strong>Phone Number</strong> <?= htmlspecialchars($phone ?: 'Not provided') ?></p>
            <p><strong>Project Type</strong> <?= htmlspecialchars($projectType) ?></p>
            <p><strong>Budget Range</strong> <?= htmlspecialchars($budget) ?></p>
        </div>
        <div class="box">
            <strong>Message</strong>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #000000;"><?= htmlspecialchars($message) ?></p>
        </div>
        
        <?php if (!empty($phone)): ?>
        <div style="margin-top: 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;">
                <tr>
                    <td style="padding-right: 8px; width: 50%;" valign="top">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" height="48" style="background-color: #25D366; border-radius: 4px; height: 48px;">
                                    <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $phone) ?>" style="display: block; width: 100%; line-height: 48px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; text-align: center;">WhatsApp Client</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style="padding-left: 8px; width: 50%;" valign="top">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" height="48" style="background-color: #000000; border-radius: 4px; height: 48px;">
                                    <a href="tel:<?= preg_replace('/[^0-9\+]/', '', $phone) ?>" style="display: block; width: 100%; line-height: 48px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; text-align: center;">Call Client Direct</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <?php endif; ?>
    </div>
</body>
</html>
