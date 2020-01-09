const mongoose = require("mongoose");

const AlbumModel = mongoose.model("Album");

// 查询所有数据
const findAllAlbums = callback => {
  AlbumModel.find({}).exec((err, books) => {
    if (!err) callback(books);
  });
};

// 添加一条记录
const addAlbum = (book, callback) => {
  AlbumModel.create(book, (err, newbook) => {
    console.log(newbook)
    if (!err) callback(newbook.toObject());
  });
};

// 删除一条记录
const deleteAlbum = (id, callback) => {
  AlbumModel.findByIdAndRemove(id, err => {
    if (!err) callback({});
  });
};

// 更新一条记录
const updateAlbum = (id, book, callback) => {
  BookModel.findOneAndUpdate({ _id: id }, book, err => {
    if (!err) callback(book);
  });
};

module.exports = { findAllAlbums, addAlbum, deleteAlbum, updateAlbum };