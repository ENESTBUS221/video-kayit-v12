const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`kayıtk_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Kayıt Sistemi Zaten Kapalı Görünüyor :).')
   

   message.reply('Kayıt Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kayıtk_${message.guild.id}`)   
db.delete(`kayıt_${message.guild.id}`)
db.delete(`kayıtlog_${message.guild.id}`)
db.delete(`kayıtalınacak_${message.guild.id}`)
db.delete(`kgirismesajı_${message.guild.id}`)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'kayıt-sistemini-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};