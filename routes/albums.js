var express = require("express");
var router = express.Router();

var albumDao = require('../dao/AlbumDao')

router
  .route("/")
  .get((req, res) => {
    albumDao.findAllAlbums((books) => {
      res.json(books)
    })
  })
  .post((req, res) => {
    let book = req.body;
    albumDao.addAlbum(book, (nb) => {
      res.json(nb)
    })
  });

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  albumDao.deleteAlbum(id, (obj) => {
    res.json(obj)
  })
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let book = req.body;
  albumDao.updateAlbum(id, book, (obj) => {
    res.json(obj)
  })
});

module.exports = router;