const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767, allowedMentions: { parse: ['users', 'roles']}
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.snipes = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
