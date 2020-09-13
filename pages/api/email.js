import sendmail from 'sendmail'

export function email(from, to, subject, body) {
    sendmail({
        from: from,
        to: to,
        subject: subject,
        html: body,
    }, function (err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
}