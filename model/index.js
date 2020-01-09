const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var albumSchema = {
  album_id: String,
  album_name: String,
  public_time: Date,
  week: Number,
  price: Number,
  cover: String,
  singers: []
}

mongoose.model('Album', albumSchema);