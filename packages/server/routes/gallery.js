const express = require('express');
const uuidv3 = require('uuid/v3');

const router = express.Router();

const getRandom = (min = 1, max = 10) => {
  return Math.floor((Math.random() * (max - min + 1)) + 1)
}

const getRandomImages = (n = 10) => {
  const ret = [];
  for (var i = 0; i < n; i++) {
    ret.push({
      src: `/images/img${getRandom()}.jpg`,
      id: uuidv3('images', uuidv3.URL),
      desc: `Image called ${i}`,
    });
  }
  return ret;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/all', function(req, res, next) {
  res.json([
    ...getRandomImages()
  ]);
});

module.exports = router;
