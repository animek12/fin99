/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

module.exports = {
    ...require('./adapters/JSONFile.js'),
    ...require('./adapters/JSONFileSync.js'),
    ...require('./adapters/LocalStorage.js'),
    ...require('./adapters/Memory.js'),
    ...require('./adapters/MemorySync.js'),
    ...require('./adapters/TextFile.js'),
    ...require('./adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}