const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'oi') {
        message.reply('Fala aí! Tudo certo? 🤖');
    }

    if (message.body.toLowerCase() === 'ajuda') {
        message.reply('Comandos disponíveis:\n- "oi"\n- "ajuda"');
    }
});

client.initialize();
