/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const { TextFileSync } = require('./TextFileSync.js');
class JSONFileSync {
    constructor(filename) {
        this.adapter = new TextFileSync(filename);
    }
    read() {
        const data = this.adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return JSON.parse(data);
        }
    }
    write(obj) {
        this.adapter.write(JSON.stringify(obj, null, 2));
    }
}
module.exports = { JSONFileSync };
