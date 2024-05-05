import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  console.log("inside backend contact service");

  const data = await req.json();
  const name = data['name'];
  const fromEmail = data['email'];
  const message = data['message'];
  const phone = data['phone'];

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    port: 587, // port for secure SMTP
    secure: false, // TLS requires secureConnection to be false
    auth: {
      user: "utsavgarg@outlook.com",
      pass: "UtsavNolan3@",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const mailData = {
    from: "utsavgarg@outlook.com",
    to: "medhavi54@gmail.com",
    subject: `Message for Adv. Sadhna Garg from Website from : ${name}`,
    text: `Email : ${fromEmail} 
    \n Phone : ${phone}
    \n Following is the message : ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log("Email sent:", info);
    return NextResponse.json(
      {
        message: `Successfully sent email!`,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ data: error }, { status: 500 });
  }

}
