const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const Suspects = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setAuthor(`Suspects Bot`)
    .addField(`Yetkili Kayıt Sistemi Kullanımı`,
                
                `**•** **\`!yetkili-kayıt-kanal-ayarla #kanal\`**\nÜyelerin Kayıt Olacağı Kanal

                 **•** **\`!yetkili-kayıt-log-ayarla #kanal\`**\nÜyeler Kayıt Olunca Bildirim Yollanan Kanal

                 **•** **\`!yetkili-giriş-mesajı #kanal\`**\nBelirtilen Kanala Giriş Mesajı Yollar

                 **•** **\`!kayıt-yetkili-rol-ayarla @rol\`**\nKullanıcıyı Kayıt Edecek Olan Rol

                 **•** **\`!kayıt-erkek-rol-ayarla @rol\`**\nKayıt Olan Erkek Üyeye Verilecek Rol

                 **•** **\`!kayıt-kadın-rol-ayarla @rol\`**\nKayıt Olan Kadın Üyeye Verilecek Rol

                 **•** **\`!yetkili-kayıt-alınacak-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıdan Alınacak Rol

                 **•** **\`!kayıtbilgi | !kayıtbilgi @kullanıcı\`**\nKullanıcının Kaç Kişiyi Kayıt Ettiğini Gösterir

                 **•** **\`!yetkili-kayıt-sistemini-kapat\`**\nKayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send(Suspects).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};


exports.help = {
    name: 'yetkili-kayıt-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};