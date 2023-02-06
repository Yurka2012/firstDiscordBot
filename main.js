const { Client, IntentsBitField, messageLink } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [32767] });
const id = 'v='

client.once("ready", () => console.log("Бот онлайн"));

client.on('message', message =>{
    if(!message.content.startsWith(id) ||message.author.bot) return;
    const args = message.content.slice(id.length).split(/ +/);
    const cmd = args.shift().toLowerCase()
    
})

client.login(token);



