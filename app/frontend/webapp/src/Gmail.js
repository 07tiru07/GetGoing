const send = require('gmail-send')({
    user: 'user@gmail.com',
    pass: 'abcdefghijklmnop',
    to: 'user@gmail.com',
    subject: 'test subject',
});
send({
    text: 'gmail-send example 1',
}, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
})