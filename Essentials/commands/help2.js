const Discord = require('discord.js');
module.exports = {
    name: 'help2',
    aliases: ['help-2'],
    execute(message, args) {
      const embed = new Discord.RichEmbed()
      .setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
        .setColor("#74FF00")
        .setTitle(`Información sobre el bot:`)
        .addField("Programadores:", "Blox, GatoLandia")
        .addField("Versión del bot:", "1.1.2")
        .addField("Repositorio (Actualmente solo en GitHub):", "https://github.com/Gato-Landia/PipaBOT")
        .addField("pp!suma [Números]", "Realiza una operación de suma desde 2 a 5 números diferentes")
        .addField("pp!resta [Números]", "Realiza una operación de resta desde 2 a 5 números diferentes")
        .addField("pp!multiplicacion [Números]", "Realiza una operación de multiplicación desde 2 a 5 números diferentes")
        .addField("pp!division [Números]", "Realiza una operación de multiplicación desde 2 a 5 números diferentes")
        .addField("pp!f-to-c [Fahrenheit]", "Convierte de F° a C°")
        .addField("pp!c-to-f [Celsius]", "Convierte de C° a F°")
      .setFooter("Page 2 of 2");
      message.channel.send(embed);
    },
};