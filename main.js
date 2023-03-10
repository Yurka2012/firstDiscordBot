const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  IntentsBitField,
  messageLink,
  Discord,
  Collection,
} = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [32767] });
const id = "=";

client.once("ready", () => console.log("Бот онлайн"));

client.commands = new Collection();

const commandsPath = path.join(__dirname, "cmd");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
//   if ("data" in command && "execute" in command) {
//     client.commands.set(command.data.name, command);
//   } else {
//     console.log(
//       `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
//     );
//   }
// }
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
  if (cmd === "пинг") {
    message.channel.send("Понг");
  }
});

client.login(token);
}
