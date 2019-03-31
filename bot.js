const Discord = require("discord.js");

var { Client } = require("discord.js");

var tokens = ['NTYxNTg5MzQzODA2OTQ3MzM4.XJ-bGA.7Os9i6paVQdlaWVrsp2G_vlVIxU', 'NTYxNTg5NzYyODg1MTU2ODY0.XJ-cEg.NJWqv-75RehY8hFfp1hDvgmqk3U', 'NTYxNTkwODgxOTI1MjAxOTMw.XJ-dMA.tR-_2AKWNAOX8P6JecwGAWr6NNc', 'NTYxNTkyMDYwMTk3NDcwMjA5.XJ-eTQ.L9SUsb8Wwc5rOW0GOfSd4nqVWL0', 'NTYxNTkzNzI1Mzc4MjMyMzIw.XJ-gtg.mGjZy-TGBNDa4paAhiaAwG46unE', 'NTYxNTk1NzUyNDYwMzIwNzc4.XJ-kOw.Dlh_f06Nt1c_qainBbj0jKW5mOw', 'NTYxNTk5NTE4MjA3MTE1MjY0.XJ-lUA.HtO5MvY7gsf3fynn5nH6JNKTB2w', 'NTYxNjAwNzcyODU3NTI4MzMx.XJ-l2A.s7E8ihrdbzaeVNHPscTp-MO81bU', 'NTYxNjAxNDg0OTgzMjM4Njk0.XJ-mbA.B-G8VV90mfHmSHpl5wKu8prz0wo', 'NTYxNjAyMDYyNDk3MDg3NTEy.XJ-nTQ.17UUklVj4zdSBkSE6uJyL4MN634', 'NTYxNjAyODA0NzEyNzM0NzIx.XJ-odw.xrAddKikypM4EJNAlHlwkX_Zl_o', 'NTYxNjA0NDIzMTcyNzUxMzgw.XJ-pPg.WYu41usJ4b9wybD4RK0Qe-mSsgI', 'NTYxNjA0ODk4OTcwNjY0OTkw.XJ-qeQ.iHfr6BHaT8AnIFt9S6iuSFoPdVU', 'NTYxNjA2MjM1OTA0ODAyODMz.XJ-ruQ.rR6y9nIl1U1hEC8CeoFrRvD8MPw', 'NTYxNjA4MDQ1MTAxMzE4MTY2.XJ-spA.yhkALHQx3E_r_YTNiWuGwugStkg', 'NTYxNjEwMDMyOTQ5NjI0ODQ2.XJ-umA.0KZBHk93qZrQUjF1eFWxL6CyQvs', 'NTYxNjEwOTczNjE4NjM0NzU0.XJ-vdw.fOfZk3BDB5-lmET_3ixAiFnnBzA', 'vNTYxNjEzMjM5NDU3NDE1MTcz.XJ-xLw.5kYR-tQZJa5c9gk8VnxfSbt71SE', 'NTYxNjEyMjY1MjU0ODEzNjk2.XJ-woQ.gME2zq3vBeygPG8e3JLquYgXcds', 'NTYxNjEzNTA4NzE5MTQ5MDY1.XJ-yGw.sjh-2_4lL_sm-eeJxEddz-4QOIM', 'NTYxNjE0NDk2OTAxMjM0Njg5.XJ-zpg.aZInZ8yJKd2nx4hD5TxtEMuNLMI', 'NTYxNjE2MDk4NjIyMTc3Mjky.XJ-0hw.Pr9NrZScgrQwQgPF3hKYSyr0ozI', 'NTYxNjE3MDM5Njc3MTk0MjQw.XJ-1_A.B8spcPlnq0Q_tjcDaWWX0hEalH0', 'NTYxODYzODgxMDA2MzgzMTE1.XKCaqw.cfbqRSwsM0PoCGqjsfSN_CipwRU', 'NTYxODY0MTY5NTYxOTE1NDAz.XKCbmA.-Pso2MevMY7qGGuX1XB2cbCcnlY', 'NTYxODY1MTgzNjEwMjczNzk3.XKCcLA.qvE0wuAkNfeqh2oMPdZTWmzu2YI', 'NTYxODY2MTM4NTEwOTUwNDIw.XKCdCA.PdyJ0NCXS3EcS4EJmTJp9uMtrB0', 'NTYxODY2NzAxNzA5NTA4NjM4.XKCd3A.Qdz5XWEoZ_Q0PsjeuAeVy89uc8A', 'NTYxODY3NTMyNTM4MjE2NDQ4.XKCetA.92hwAgUMHhqn9_uP7gu6xC9CrwQ', 'NTYxODY4NTQxNzcxMzgyODA2.XKCflA.ucnWASXfOcBWW4FAJbXmIKsdNd4']; // تحط توكنات البوتات اللي بدك اياها تشتغل على نفس الكود ;l

var prefix = ['!'];

tokens.forEach(token => {
    var client = new Client();
    // هنا اي كود 
    // وكل البوتات رح تشتغل عليه
	
	
	
	
	
	
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
	
	
	
	
	
	
	
	
	
	
	
    client.login(token);
});
