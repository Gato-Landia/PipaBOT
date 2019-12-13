const Discord = require('discord.js');
module.exports = {
    name: 'searchgl',
    aliases: ['search-gl', 'search-google', 'searchgoogle'],
    execute: async (message, args) => {
    let searchQTitle = args.join(" ");
    let searchQ = args.join("");  
    let searchE = ('search?q=' + searchQ + '&sourceid=discord');
    if(!searchQ) return message.channel.send('Que querias buscar?');
    const embed = new Discord.RichEmbed()
    .setDescription(`Busqueda realizada por **${message.author.username}**`)
    .setTitle('(Google) Buscaste ' + searchQTitle,)
    .addField("https://www.google.com/" + searchE, "Cliquea la página para ver su contenido")
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};