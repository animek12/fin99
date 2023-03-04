/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = class mongoDB {
  constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
    this.url = url
    this.data = this._data = this._schema = this._model = {}
    this.db
    this.options = options
  }
  async read() {
    this.db = await mongoose.connect(this.url, { ...this.options })
    this.connection = mongoose.connection
    let schema = this._schema = new Schema({
      data: {
        type: Object,
        required: true, //depends on whether the field is mandatory or not
        default: {}
      }
    })
    try { this._model = mongoose.model('data', schema) } catch { this._model = mongoose.model('data') }
    this._data = await this._model.findOne({})
    if (!this._data) {
      this.data = {}
      await this.write(this.data)
      this._data = await this._model.findOne({})
    } else this.data = this._data.data
    return this.data
  }


  async write(data) {
    if (!data) return data
    if (!this._data) return (new this._model({ data })).save()
    this._model.findById(this._data._id, (err, docs) => {
      if (!err) {
        if (!docs.data) docs.data = {}
        docs.data = data
        return docs.save()
      }
    })
  }
}