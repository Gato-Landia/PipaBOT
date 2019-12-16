module.exports = {
    name: 'test',
    description: 'test message',
    execute(message) {
        message.channel.send(`Test message`);
    },
};
