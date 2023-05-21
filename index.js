const Discord = require('discord.js');
const client = new Discord.Client();

let interval;
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
client.login("MTEwOTc1NTEzMTYzOTEwMzUwOA.G375sv.FFxRQOhXFoKFPpIbgqwMTfTqV8gg2JYcIsO__M"); //필요시 Vs에디터등에서 토큰입력하고 작성
                           //실행 후 다시 지우는 거 잊지말 것!
