const Discord = require("discord.js");

const client = new Discord.Client();
const prefix = '-';


const fs = require('fs');



client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
    
}

client.once('ready', () =>{
    console.log('Rawdog69 has entered the chat');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();


    if(command === 'ping')
    {
        message.channel.send('pong!');
    }

    else if(command === 'hello')
    {
        message.channel.send('Whats poppin!');
    }

});

client.login('ODQyODYxNDU1NTMwMzkzNjAw.YJ7d5g.Xli-W4s40LV9tNASzpVRXuestH8');





 