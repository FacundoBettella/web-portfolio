import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.APY_RESEND_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [fromEmail, email],
    subject: subject,
    react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted</p>
        <p>{message}</p>
      </>
    ),
  });

  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ message: "Email sent succesfully", data });
}
