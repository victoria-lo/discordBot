require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

let interval;
client.on('message', async msg => {
  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;
    case "!meme":
      msg.channel.send("Here's your meme!");
      const img = await getMeme();
      msg.channel.send(img);
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

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  console.log(res.data)
  return res.data.memes[0].url;
}


//must be last line
client.login("TokenLine"); //필요시 Vs에디터등에서 토큰입력하고 작성
                           //실행 후 다시 지우는 거 잊지말 것!
