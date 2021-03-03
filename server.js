const prefix = ".";

const devs = ["639118234603487254"];// ID Owner

const { Client, Collection } = require('discord.js');

const client = new Client();

const fs = require('fs');

const Gamedig = require('gamedig')

client.on('ready', () => {

console.log(`Logged in as ${client.user.tag}!`);

  });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);

        }

const cmd = require('node-cmd')

client.on("ready", () => { 

console.log("bot iniciado");

  Gamedig.query({

          type: 'mtasa', //

                  host: '78.47.204.80', //  

                          port: '27315'  // 

                                  }).then((state) => {

                                    client.user.setActivity(`Players: ${state.raw.numplayers}/${state.maxplayers}`, {type: 'PLAYING'});

                                      });

setInterval(() => {

    cmd.run('refresh');

        console.log('Done Refresh');

          }, 30000)

          });

client.on('message', (message) => {

  if(message.author.bot) return;

      if(!message.content.startsWith(prefix)) return;

          const [commandName, ...args] = message.content.slice(prefix.length).trim().split(/ +/g); 

              if(!client.commands.has(commandName)) return;

                  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

                      if(!command) return;

                              command.run(message,client,args);

});

client.login('NzM4MTM3NTMzMDk5Mjc4Mzc2.XyHiJQ.Id9MVtDEmbV2FXf8iVIKc8bmvTw')
