const { RichEmbed } = require("discord.js");

module.exports = {
    name: "di",
    category: "Divertidos",
    description: "Pipa repitirá lo que digas!",
    run: async (client, message, args) => {
        let texto = args.join(' ');
        if(!texto) return message.reply("Dime que es lo que quieres que diga **owo**");
        message.delete()
        message.channel.send(texto);
    }
}