/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const fs = require('fs');
const chalk = require('chalk');

// Settings
// Rest API
global.danzzapi = 'https://danzzapi.xyz'
global.danzzapi2 = 'https://api-danzz.xyz'
global.saipulapi = 'https://saipulanuar.ga'
global.ibengapi = 'https://api.ibeng.tech'

// API Key For https://danzzapi.xyz & https://api-danzz.xyz
global.apikey = 'YOUR APIKEY' // Get in: https://danzzapi.xyz
global.apikeyprem = 'BELI APIKEY? CHAT: wa.me/6289512545999 / KE WEBSITE RESMI: https://danzzapi.xyz/pricing' // Get in: https://danzzapi.xyz
global.apikeyvip = 'BELI APIKEY? CHAT: wa.me/6289512545999 / KE WEBSITE RESMI: https://danzzapi.xyz/pricing' // Get in: https://danzzapi.xyz

// API Key For https://saipulanuar.ga
global.saipulkey = `Warning: API saipulanuar.ga Don't use the key`

// API Key For https://api.ibeng.tech
global.ibengkey = 'tamvan'

// Session
global.sessionName = 'session'

// Control
global.botName = 'Danzz Bot'
global.ownerName = 'Danzz Coding'
global.ownerNumber = ['6289512545999']
global.botNumber = ['6288296339947']
global.premiumNumber = ['6289512545999','6288296339947']
global.packname = '2023 © Created By'
global.author = 'www.danzzcoding.my.id'
global.prefa = ['.']
global.wm = '© Danzz Coding - All Rights Reserved.'
global.menustyle = '>'
//global.menustyle = '•'

// Auto Read
//global.autoread = 'off' // delete the text in brackets to turn on auto read.

// Message Error
global.mess = {
	limitsUsed: 'Limit terpakai (-1)',
	banned: 'Anda telah di *ban* oleh owner, hubungi *owner* untuk membuka',
	notRegister: 'Anda belum terdaftar di *database* kami, silahkan daftar terlebih dahulu dengan mengetik: *.register nama.umur*',
    notPremium: 'Anda bukan user *premium*, beli dulu sana ke *owner bot*',
    success: 'Success ✓',
    error: 'Error, not found',
    admin: 'Fitur khusus admin group!',
    botAdmin: 'Bot harus menjadi admin terlebih dahulu!',
    owner: 'Fitur khusus owner bot',
    group: 'Fitur khusus group chat',
    private: 'Fitur khusus private chat!',
    bot: 'Fitur khusus nomor bot',
    wait: 'Wait a moment...',
    endLimit: 'Limit harian anda telah habis, limit akan *direset setiap pukul 00:00 WIB.*\n\nKetik *.addlimit* untuk menambahkan limit.'
}

// Limit
global.limit = {
	free: '10',
	premium: '1000',
	vip: 'unlimited'
}

// Media
global.img = fs.readFileSync('./src/images/banner.jpg')
//global.qris = { url: 'https://telegra.ph/file/cd0372ebf13b265f3feb5.jpg' }

// Auto Refresh
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})