/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const axios = require('axios')
const cheerio = require('cheerio')

function jadwalsholat(NOMOR) {
	return new Promise(async(resolve, reject) =>{
		axios.get('https://kalam.sindonews.com/jadwalsholat/' + NOMOR).then(({ data }) => {
			const $ = cheerio.load(data)
			const result = {};
			$('div.imsakiyah-content').each(function(a, b) {
			result.Tanggal = $(b).find('tr:nth-child(1) > td:nth-child(1)').text()
			result.imsak = $(b).find('tr:nth-child(1) > td:nth-child(2)').text()
			result.subuh = $(b).find('tr:nth-child(1) > td:nth-child(3)').text()
			result.zuhur = $(b).find('tr:nth-child(1) > td:nth-child(4)').text()
			result.ashar = $(b).find('tr:nth-child(1) > td:nth-child(5)').text()
			result.maghrib = $(b).find('tr:nth-child(1) > td:nth-child(6)').text()
			result.isya = $(b).find('tr:nth-child(1) > td:nth-child(7)').text()
			})
			resolve(result)
		})
		.catch(reject)
	})
}

const jadwalsholat2 = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    result = {
                    status: 200,
                    author: "Danzz Coding",
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}

const listsurah = () => {
            return new Promise((resolve, reject) => {
                  axios.get('https://litequran.net/')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let listsurah = []
                       $('body > main > section > ol > li > a').each(function(a, b) {
                    listsurah.push($(b).text())
                })
                       result = {
                        status: 200,
                        author: "Danzz Coding",
                        listsurah: listsurah
                       }
                       resolve(result)
                  }).catch(reject)
             })
        }

const searchsurah = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://litequran.net/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > main > article > ol > li').each(function(a, b) {
                    result = {
                    status: 200,
                    author: "Danzz Coding",
                    arab: $(b).find('> span.ayat').text(),
                    latin: $(b).find('> span.bacaan').text(),
                    translate: $(b).find('> span.arti').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

const tafsirsurah = (query) => {
    return new Promise((resolve, reject) => {    	
        axios.get(`https://tafsirq.com/topik/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > div:nth-child(4) > div > div.col-md-6 > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: "Danzz Coding",
                    surah: $(b).find('> div.panel-heading.panel-choco > div > div > a').text(),
                    tafsir: $(b).find('> div.panel-body.excerpt').text().trim(),
                    type: $(b).find('> div.panel-heading.panel-choco > div > div > span').text(),
                    source: $(b).find('> div.panel-heading.panel-choco > div > div > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

module.exports = {
	jadwalsholat,
	jadwalsholat2,
	searchsurah,
	tafsirsurah
}