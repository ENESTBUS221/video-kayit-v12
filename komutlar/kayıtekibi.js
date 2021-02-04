const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send('Lütfen Girişde Kayıt İçin Etiketlenecek Rolü Etiketlermisin?')
   
  db.set(`kayıtekibirole_${message.guild.id}`, rol.id)
  message.channel.send(`Etiketlenecek Rol Başarıyla Ayarlandı; **${rol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-ekibi-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};