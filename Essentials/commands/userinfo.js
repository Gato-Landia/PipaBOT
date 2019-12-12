const Discord = require('discord.js');

module.exports = {
    name 'userinfo',
    aliases ['user-info'],
    execute(message) {
        let estados = {
        online Online,
        offline Offline,
        idle Ausente,
        dnd No molestar,

    };
    let mencionado = message.mentions.members.first()  message.member;
    const embed = new Discord.RichEmbed()
    .setAuthor(`Información de ${mencionado.user.username}`)
    .setThumbnail(mencionado.user.displayAvatarURL)
    .setColor(RANDOM)
    .addField(Username, `${mencionado.user.tag}`)
    .addField(Creado en, `${mencionado.createdAt}`)
    .addField(Entró en, mencionado.joinedAt.toDateString(), true)
    .addField(ID, `${mencionado.id}`)
    .addField(Estado, `${estados[mencionado.presence.status]}`)
    .addField(Roles, `${mencionado.roles.map(m = m).join(-)}`);
    message.channel.send(embed);
    }, 
};