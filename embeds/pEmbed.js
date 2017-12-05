module.exports.profileEmbed = function(client, message, user, iUser, Discord) {
    var embed = new Discord.RichEmbed()
        .setTitle(user.username)
        .setDescription(` \n\n**Star Dust:** ${iUser.amountDust}:sparkles:\nTo get more stardust\nplease participate in events!`)
        .setColor(0x9975B9)
        .setThumbnail(user.displayAvatarURL);

    message.channel.send({embed: embed});

}