//accept: filepath, smtp params
import nodemailer from 'nodemailer';
import { getArgs } from './sendArgs.js';
import { readQueueFile } from './queueDetails.js';
const args = await getArgs();
const file = args.file;
const data = readQueueFile(file);
const options = {
    host: args.host,
    port: args.port,
    // secure: true,
    auth: {
        user: args.user,
        pass: args.pass,
    },
    connectionTimeout: 10000,
};
console.log(args);
console.log(data);
console.log(options);
const transporter = nodemailer.createTransport(options);
// send email
await transporter.sendMail({
    from: data.mail_from.original,
    to: data.rcpt_to[0].original,
    subject: 'Test Email Subject',
    html: '<h1>Example HTML Message Body</h1>',
});
