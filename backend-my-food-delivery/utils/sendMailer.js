import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (email, subject, text) => {
  const info = {
    from: `food <${process.env.EMAIL}>`,
    to: email,
    subject: subject,
    text: text,
  };

  try {
    return await mailTransporter.sendMail(info);
  } catch (error) {
    console.error(error, "err");
  }
};
