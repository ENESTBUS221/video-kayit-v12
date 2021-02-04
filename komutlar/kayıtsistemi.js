const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const suspects = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setAuthor(`Suspects Bot`)
    .addField(`Kullanıcı Kayıt Sistemi Kullanımı`,
                
                `**•** **\`!kayıt-kanal-ayarla #kanal\`**\nÜyelerin Kayıt Olacağı Kanal

                 **•** **\`!kayıt-log-ayarla #kanal\`**\nÜyeler Kayıt Olunca Bildirim Yollanan Kanal

                 **•** **\`!giriş-mesajı #kanal\`**\nBelirtilen Kanala Giriş Mesajı Yollar

                 **•** **\`!kayıt-verilecek-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıya Verilecek Rol

                 **•** **\`!kayıt-alınacak-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıdan Alınacak Rol

                 **•** **\`!kayıt-sistemini-kapat\`**\nKayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send(suspects).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};


exports.help = {
    name: 'kullanıcı-kayıt-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};