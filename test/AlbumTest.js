const mongoose = require("mongoose");
require("../model");
let AlbumDao = require("../dao/AlbumDao");
const assert = require("assert");

describe("测试AlbumDao", function() {
  before(function() {
    mongoose.connect("mongodb://39.100.81.23:27017/Albums", function(err) {
      if (!err) console.log("mongodb is successful");
    });
  }),
    after(function() {
      mongoose.disconnect();
    }),
    it("测试查询所有书", function(done) {
      AlbumDao.findAllAlbums(Albums => {
        assert.ok(Albums.length > 0);
        Albums.forEach(Album => console.log(Album._id));
        done();
      });
    });

  it("测试添加一本书", function(done) {
    let Album = { name: "d3", price: 45 };
    AlbumDao.addAlbum(Album, newAlbum => {
      assert.ok(newAlbum._id != null);
      console.log(newAlbum._id);
      done();
    });
  });

  it("测试删除一本书", function(done) {
    let id = "5e15d159457e7088e5b63e31";
    AlbumDao.deleteAlbum(id, res => {
      console.log(res);
      done();
    });
  });

  it("测试更新一本书", function(done) {
    let id = "5e15d7fd7f37fe8b2210ec3a";
    let Album = { name: "node", price: 50 };
    AlbumDao.updateAlbum(id, Album, res => {
      assert.ok(res!=null);
      console.log();
      done();
    });
  });
});
