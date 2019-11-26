module.exports = {
    name: "ping",
    category: "Info",
    description: "Mira tu ping (ms)!",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Espere un momento...`);

        msg.edit(`Tu ping (en ms) es ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nEl ping de Pipa es:${Math.round(client.ping)}ms`);
    }
}