const Discord = require("discord.js");

const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();

console.log("Scrpit By Evron");
console.log("Spam is online");

client.on('ready', async() => {
var server = "561584173811236888"; 
var channel = "561584286067589161";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**EvronTheBestInYT&Descord** :leaves:')
    },305);
})

client.on('message',function(message) {
    let prefix = "!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});


client1.login(process.env.TOKEN1);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);
client11.login(process.env.TOKEN11);
client12.login(process.env.TOKEN12);
client13.login(process.env.TOKEN13);
client14.login(process.env.TOKEN14);
client15.login(process.env.TOKEN15);
client16.login(process.env.TOKEN16);
client17.login(process.env.TOKEN17);
client18.login(process.env.TOKEN18);
client19.login(process.env.TOKEN19);
client20.login(process.env.TOKEN20);
client21.login(process.env.TOKEN21);
client22.login(process.env.TOKEN22);
client23.login(process.env.TOKEN23);
client24.login(process.env.TOKEN24);
client25.login(process.env.TOKEN25);
client26.login(process.env.TOKEN26);
client27.login(process.env.TOKEN27);
client28.login(process.env.TOKEN28);
client29.login(process.env.TOKEN29);
client30.login(process.env.TOKEN30);
