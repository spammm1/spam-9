﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("616866626612101121")
setInterval(function() {
channel.send(`thfahiuhhfoiaphfahfoiuafhaoifh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);