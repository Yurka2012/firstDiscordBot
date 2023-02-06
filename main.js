const { Client, IntentsBitField } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

client.once("ready", () => console.log("Бот онлайн"));

client.login(token);
