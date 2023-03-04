/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const fs = require('fs');

// Get Data
_banned = JSON.parse(fs.readFileSync('./database/user/banned.json'))

const addBannedUser = (userid, number) => {
    const data = { id: userid, number: number }
    _banned.push(data)
    fs.writeFileSync('./database/user/banned.json', JSON.stringify(_banned))
}

const checkBannedUser = (userid) => {
    let status = false
    Object.keys(_banned).forEach((i) => {
        if (_banned[i].id === userid) {
            status = true
        }
    })
    return status
}

module.exports = {
	addBannedUser,
	checkBannedUser
}