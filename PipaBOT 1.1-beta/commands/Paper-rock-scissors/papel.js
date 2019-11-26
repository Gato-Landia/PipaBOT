const { RichEmbed } = require("discord.js");

module.exports = {
    name: "papel",
    category: "Paper-rock-scissors",
    description: "Eliges papel",
    run: async (client, message, args) => {
        respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra, Papel o Tijeras`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Gane") ; break;
            case 2: embed.addField("Piedra", "Perdi") ; break;
            case 3: embed.addField("Papel:", "Empate") ; break;            
          };
          message.channel.send(embed);   
    }
}