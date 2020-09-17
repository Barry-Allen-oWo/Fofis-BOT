// 🔥 Create Server.js

const Express = require("express") // 🍅 If you want to Install Express, type in Terminal: npm i express -S

const App = Express();

App.get("/", (Request, Response) => {

  const Ping = new Date();
  
  Ping.setHours(Ping.getHours() - 3);
  
  Response.sendStatus(200);
  
});

// 🍒 This is very important for when your BOT is Hosted on some Service
