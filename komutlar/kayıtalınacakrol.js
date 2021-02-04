const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let rol2 = message.mentions.roles.first()
  if (!rol2) return message.channel.send('Lütfen Alınacak rolü etiketlermisin?')
   
  db.set(`kayıtalınacak_${message.guild.id}`, rol2.id)
  message.channel.send(`Alınacak Rol Başarıyla Ayarlandı; **${rol2}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-alınacak-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};