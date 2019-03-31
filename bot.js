const Discord = require("discord.js");
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.client();
const client4 = new Discord.client();
const client5 = new Discord.client();
const client6 = new Discord.client();
const client7 = new Discord.client();
const client8 = new Discord.client();
const client9 = new Discord.client();
const client10 = new Discord.client();
const client11 = new Discord.client();
const client12 = new Discord.client();
const client13 = new Discord.client();
const client14 = new Discord.client();
const client15 = new Discord.client();
const client16 = new Discord.client();
const client17 = new Discord.client();
const client18 = new Discord.client();
const client19 = new Discord.client();
const client20 = new Discord.client();
const client21 = new Discord.client();
const client22 = new Discord.client();
const client23 = new Discord.client();
const client24 = new Discord.client();
const client25 = new Discord.client();
const client26 = new Discord.client();
const client27 = new Discord.client();
const client28 = new Discord.client();
const client29 = new Discord.client();
const client30 = new Discord.client();





client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Evron `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`Loadinng....`);
   console.log(`Loadinng.....`);
   console.log(`Loadinng......`);
   console.log(`Loadinng.......`);
   console.log(`Loadinng........`);
   console.log(`This Bots Online ' `);
   console.log(`بلش السبام ياعمري.`);
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
