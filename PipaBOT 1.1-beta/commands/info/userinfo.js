const { getMember, formatDate } = require("../../functions.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "userinfo",
    category: "info",
    description: "Muestra información del usuario",
    usage: "[username | id, | mention",
    run: async(client, message, args) => {
        const member = getMember(message, args.join(" "));

        //member variables
        const joined = formatDate(member.joinedAt);
        const role = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join(", ") || "none";

        //User Variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarUrl)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor --- "#000000" ? "#ffffff": member.displayHexColor)
            
            .addField("Información del miembro:", stripIndents`**> Nombre en el servidor:** ${member.displayName}
            **> Se unió el:** ${joined}
            **> Roles:** ${roles}`, true)
            
            .addField("Información del usuario:", stripIndents`**> ID:** ${member.user.id}
            **> Nombre de usuario:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> Creada el:** ${created}`)

            .setTimestamp()
        if (member.user.presence.game)
            embed.addField("Jugando a:", `${member.user.presence.game.name}`);

            message.channel.send(embed);

        

    }
}