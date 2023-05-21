const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('message', async msg => {
  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;
    case "!eye":
      msg.channel.send("You are now subscribed to eye reminders.");
       interval = setInterval (function () {
        msg.channel.send("Please take an eye break now!")
        .catch(console.error); 
      }, 3600000); //every hour
      break;
    case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
  }
});

//must be last line
client.login(token); //config.json에 격리.
																						  //해당파일은 따로 만들어줘야함
/* example . vscord 등으로 생성															  //후에 환경변수를 사용한 dotenv도 사용고려
{ 
	"token": "토큰"
}
*/
