const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let mesajkanal = message.mentions.channels.first()
  if (!mesajkanal) return message.channel.send('Lütfen Hoşgeldin Mesajını Atacağım Kanalı Etiketlermisin?')
   db.set(`kgirismesajı_${message.guild.id}`, mesajkanal.id)
  
  message.channel.send(`Sunucuya Yeni Üye Katılınca ${mesajkanal} Kanalına \`Hoşgeldin -uye- Kayıt Olmak İçin !kayıt İsim Yaş\` Şeklinde Mesaj Yollayacağım.`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'giriş-mesajı',
        description: 'giriş mesajı yollar',
        usage: 'giriş-mesaj-ayarla'
}