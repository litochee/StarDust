const pEmbed = require('./../embeds/pEmbed.js'); //Embeds user
exports.run = (client, message, args, sql, Discord) =>{
  sql.get(`SELECT * FROM sDustUsers WHERE userID = '${message.author.id}'`).then(uRow =>{
    const eUsername = message.author.username.replace("'", "''"); //replaced ' in usernames
    if(!uRow){//If row is not found
      message.reply("Sorry, you do not have any **StarDust**. Please enter in events to gain **StarDust**."); //output no points
    }else{//if row is found
      pEmbed.profileEmbed(client, message, message.author, uRow, Discord);
    }
  });
}