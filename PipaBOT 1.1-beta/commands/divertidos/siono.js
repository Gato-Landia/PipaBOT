const { RichEmbed } = require("discord.js");

module.exports = {
    name: "siono",
    category: "Divertidos",
    description: "Di una pregunta de si o no, Pipa te la responderá",
    run: async (client, message, args) => {
        let texto = args.join(' ');
          respuestas = 6;
      if(!texto) return message.reply("Preguntame!")
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Si o no`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Obviamente", "Si") ; break;
            case 2: embed.addField("Obviamente", "No") ; break;
            case 3: embed.addField("Quizás", "No") ; break;
            case 4: embed.addField("Quizás", "Sí") ; break;
            case 5: embed.addField("No estoy seguro pero...", "No") ; break;
            case 6: embed.addField("No estoy seguro pero...", "Sí") ; break;
                };
          message.channel.send(embed);
    }
}