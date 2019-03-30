const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Evron `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message',function(message) {
    let prefix = "&";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});

client.on('message', message => {
    if(message.content === 'يومي'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'كريدت'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'ريب'){
        message.channel.send('#rep')
    }
});



client.on("ready", () => {
let channel =     client.channels.get("561584286067589161")
setInterval(function() {
channel.send(`**Evron :beers:  The Best :smoking:  Youtuber :heartpulse:  & Discorder :heartpulse: **`);
}, 30)
})



client.login(process.env.TOKEN1);
client.login(process.env.TOKEN2);
client.login(process.env.TOKEN3);
client.login(process.env.TOKEN4);
client.login(process.env.TOKEN5);
client.login(process.env.TOKEN6);
client.login(process.env.TOKEN7);
client.login(process.env.TOKEN8);
client.login(process.env.TOKEN9);
client.login(process.env.TOKEN10);
client.login(process.env.TOKEN11);
client.login(process.env.TOKEN12);
client.login(process.env.TOKEN13);
client.login(process.env.TOKEN14);
client.login(process.env.TOKEN15);
client.login(process.env.TOKEN16);
client.login(process.env.TOKEN17);
client.login(process.env.TOKEN18);
client.login(process.env.TOKEN19);
client.login(process.env.TOKEN20);
client.login(process.env.TOKEN21);
client.login(process.env.TOKEN22);
client.login(process.env.TOKEN23);
client.login(process.env.TOKEN24);
client.login(process.env.TOKEN25);
client.login(process.env.TOKEN26);
client.login(process.env.TOKEN27);
client.login(process.env.TOKEN28);
client.login(process.env.TOKEN29);
client.login(process.env.TOKEN30);
