<?php
// Required variables: $firstName, $projectType, $budget
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Devorica</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; background-color: #F8F9FA; -webkit-font-smoothing: antialiased;">
    <!-- Centered Outer Container -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8F9FA; width: 100%;">
        <tr>
            <td align="center" style="padding: 60px 20px;">
                <!-- Main Email Card (Centered) -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #EAEAEA; overflow: hidden; box-shadow: 0 4px 25px rgba(0,0,0,0.04); margin: 0 auto;">
                    
                    <!-- Clean Black Header with Centered Logo -->
                    <tr>
                        <td align="center" style="background-color: #000000; padding: 35px 20px;">
                            <a href="https://devorica.com" target="_blank" style="text-decoration: none;">
                                <img src="https://devorica.com/devorica-lodo.png" alt="Devorica" width="160" style="display: block; border: 0; margin: 0 auto;">
                            </a>
                        </td>
                    </tr>
                    
                    <!-- Left-Aligned Professional Content -->
                    <tr>
                        <td align="left" style="padding: 50px 40px; font-size: 16px; line-height: 1.8; color: #333333; text-align: left;">
                            <h1 style="font-size: 24px; font-weight: 700; color: #000000; margin: 0 0 20px 0; letter-spacing: -0.5px;">Hello <?= htmlspecialchars($firstName) ?>,</h1>
                            
                            <p style="margin: 0 0 30px 0; color: #444444;">Thank you for reaching out to Devorica. We have successfully received your project enquiry and are thrilled at the opportunity to work with you. Our team is currently reviewing your requirements.</p>
                            
                            <!-- Left-Aligned Highlight Box -->
                            <div style="background-color: #FAFAFA; border-left: 3px solid #E85002; padding: 22px 25px; margin: 35px 0; border-radius: 0 4px 4px 0; border-top: 1px solid #EEEEEE; border-right: 1px solid #EEEEEE; border-bottom: 1px solid #EEEEEE;">
                                <p style="margin: 0 0 15px 0;">
                                    <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">Project Type</strong>
                                    <span style="color: #111111; font-weight: 600; font-size: 16px;"><?= htmlspecialchars($projectType) ?></span>
                                </p>
                                <p style="margin: 0;">
                                    <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">Estimated Budget</strong>
                                    <span style="color: #E85002; font-weight: 600; font-size: 16px;"><?= htmlspecialchars($budget) ?></span>
                                </p>
                            </div>
                            
                            <p style="margin: 0 0 25px 0; color: #444444;">At Devorica, we pride ourselves on delivering handcrafted, award-winning digital experiences. We are excited about the possibility of bringing your vision to life.</p>
                            
                            <p style="margin: 0 0 35px 0; color: #444444;">If you have any immediate questions, please connect with us instantly via WhatsApp.</p>
                            
                            <!-- Left-Aligned Button -->
                            <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 40px;">
                                <tr>
                                    <td align="center" style="background-color: #E85002; border-radius: 4px;">
                                        <a href="https://wa.me/8801619504428" style="display: inline-block; padding: 16px 32px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 16px; text-align: center; letter-spacing: 0.5px;">Chat on WhatsApp</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 0; color: #111111; font-weight: 600; font-size: 16px;">Best regards,<br><span style="color: #E85002;">The Devorica Team</span></p>
                        </td>
                    </tr>
                    
                    <!-- Left-Aligned Clean Footer -->
                    <tr>
                        <td align="left" style="background-color: #F8F9FA; padding: 35px 40px; border-top: 1px solid #EAEAEA;">
                            <p style="margin: 0 0 15px 0; font-size: 13px;">
                                <a href="https://facebook.com/devorica" style="color: #666666; text-decoration: none; margin-right: 15px; font-weight: 500;">Facebook</a>
                                <a href="https://instagram.com/devorica" style="color: #666666; text-decoration: none; margin-right: 15px; font-weight: 500;">Instagram</a>
                                <a href="https://threads.net/@devorica" style="color: #666666; text-decoration: none; font-weight: 500;">Threads</a>
                            </p>
                            <p style="margin: 0 0 6px 0; color: #AAAAAA; font-size: 12px;">&copy; <?= date("Y") ?> Devorica. All rights reserved.</p>
                            <p style="margin: 0; font-size: 12px;"><a href="https://devorica.com" style="color: #AAAAAA; text-decoration: none;">devorica.com</a> <span style="color: #DDDDDD;">&nbsp;|&nbsp;</span> <a href="mailto:support@devorica.com" style="color: #AAAAAA; text-decoration: none;">support@devorica.com</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
