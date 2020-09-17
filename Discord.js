// 🌹 Discord.js Install --> Type in the Terminal: npm i discord.js -S

const Discord = require("discord.js"); // 🍒 Discord.js Library

// 🔥 Discord.Client = https://discord.js.org/#/docs/main/stable/class/Client/

const client = new Discord.Client();

// 🎓 Customer Events

// 🎃 Message Event --> https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message/

client.on("message", (Message) => {
  if ( Message.content === "!Ping" ) {
    Message.channel.send("Pong!");
  };
});

// 💎 All More Information is on https://discord.js.org/
