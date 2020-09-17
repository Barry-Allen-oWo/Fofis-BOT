// 🔥 Create Server.js

const Express = require("express");

const App = Express();

App.get("/", (Request, Response) => {

  const Ping = new Date();
  
  Ping.setHours(Ping.getHours() - 3);
  
  Response.sendStatus(200);
  
});

// 🍒 This is very important for when your BOT is Hosted on some Service
