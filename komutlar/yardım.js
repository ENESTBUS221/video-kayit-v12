const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
let sayfalar = [
    
`**Prefix: !**\nBir problemin var mı?,\n[Sunucumuz](https://discord.gg/bWN2aTuJ6W)\n[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=796024413643735090&scope=bot&permissions=2147483647)\nAnlık Komut Sayımız: ${client.commands.size}`,
    
"**Bilgilendirme**\n``Botumuzu Kullandığınız İçin Teşekkür Ederiz!``",
"**Bilgilendirme**\n``Bu Altyapı Suspects Kanalına Aittir Çalanlara Yasal İşlem Başlatılacaktır!``" +
      
client.commands
.filter(cmd => exports.help.category === "admin")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),

"**Kayıt Komutları**\n``!kullanıcı-kayıt-sistemi``\n``!yetkili-kayıt-sistemi``" +

client.commands
.filter(cmd => exports.help.category === "util")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Koruma Komutları**\n``Çok Yakında!``" +

client.commands
.filter(cmd => exports.help.category === "photo")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Eğlence Komutları**\n``Çok Yakında!``" +

client.commands
.filter(cmd => exports.help.category === "fun")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Moderasyon Komutları**\n``Çok Yakında!``",
    
"**NSFW :x:**\n``Çok Yakında!``" +
  
client.commands
.filter(cmd => exports.help.category === "nsfw")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
   
];
  
let sayfa = 1;

const embed = new Discord.MessageEmbed()
    
.setColor("RANDOM")
.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
.setDescription(sayfalar[sayfa - 1]);

message.channel.send(embed).then(msg => {
msg.react("⏪").then(r => {
msg.react("⏩");

const backwardsFilter = (reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id;

const backwards = msg.createReactionCollector(backwardsFilter);
const forwards = msg.createReactionCollector(forwardsFilter);

backwards.on("collect", r => {
  
if (sayfa === 1) return;

sayfa--;

embed.setDescription(sayfalar[sayfa - 1]);
embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
msg.edit(embed);
});

forwards.on("collect", r => {

if (sayfa === sayfalar.length) return;

sayfa++;

embed.setDescription(sayfalar[sayfa - 1]);
embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
msg.edit(embed);

});
});
});
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gelişmekteyardım", "demoyardım", "h", "dy"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım",
  description: "Gelişmiş Sayfalı Yardım.",
  usage: "yardım"
};