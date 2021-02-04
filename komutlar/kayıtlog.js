const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Lütfen Kayıt Log Kanalını Etiketlermisin?')
   
  db.set(`kayıtlog_${message.guild.id}`, kanal.id)
  message.channel.send(`Kayıt Log Kanalı Başarıyla Ayarlandı; **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-log-ayarla',
 description: 'kayıt Log kanalı seçersiniz',
 usage: 'kayıt-log <#kanal>'
};