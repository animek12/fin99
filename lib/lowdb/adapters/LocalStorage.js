/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    read() {
        const value = localStorage.getItem(this.key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    write(obj) {
        localStorage.setItem(this.key, JSON.stringify(obj));
    }
}
module.exports = { LocalStorage };
