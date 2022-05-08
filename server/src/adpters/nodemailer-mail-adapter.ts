import { MailAdapter, SendMailData } from "./mail-adpter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "23b4aad6b4206b",
      pass: "230c43df7022cb"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Anna Beatriz <annabeatrizpereira999@gmail.com',
            subject,
            html: body,
        });
    };
}