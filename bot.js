const Discord = require("discord.js");
const { client, client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14, client15, client16, client17, client18, client19, client20, client21, client22, client23, client24, client25, client26, client27, client28, client29, client30 } = new Discord.Client();

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
