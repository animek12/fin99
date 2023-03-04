/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const fs = require('fs');
const { Writer } = require('steno');
class TextFile {
    constructor(filename) {
        this.filename = filename;
        this.writer = new Writer(filename);
    }
    async read() {
        let data;
        try {
            data = await fs.promises.readFile(this.filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        return this.writer.write(str);
    }
}
module.exports = { TextFile };