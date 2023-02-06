const { Client, IntentsBitField, messageLink } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [32767] });
const id = 'v='

client.once("ready", () => console.log("Бот онлайн"));

client.on('message', message =>{
    if(!message.content)
})

client.login(token);



