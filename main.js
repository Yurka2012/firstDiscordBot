const { Client, IntentsBitField, Discord } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [32767] });
const id = "=";

client.once("ready", () => console.log("Бот онлайн"));

const fs = require('fs');

client.commands = new Discord.Collection();

const cmdFiles = fs.readdirSync('./cmd'.filter(file => file.endWith('.js')));

for(const file of commandFiles) {
  const cmd = require(`./cmd/${file}`);
  client.cmd.set(cmd.name , cmd);
}

client.on("message", (message) => {
  if (!message.content.startsWith(id) || message.author.bot) return;
  const args = message.content.slice(id.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd === "привет") {
    message.channel.send("Ку!");
  }
  if (cmd === "help") {
    message.channel.send(
      "Привет, бро! \n Мой преикс: =\n Мои команды: \n привет (бот будет писать Ку!) \n пинг (бот отвечает понг!)"
    );
  }
  if(cmd === 'пинг') {
    message.channel.send(
      'Понг'
    )
  }
});

client.login(token);
