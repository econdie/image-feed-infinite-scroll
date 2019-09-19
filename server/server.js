const express = require('express');
const app = express();
const casual = require('casual');

const IMAGE_URL = `https://picsum.photos/id`;
const ITEMS_PER_PAGE = 20;

const getItem = async itemNumber => {
  return new Promise((resolve) => {
    const randomTimeoutMiliSeconds = Math.floor(Math.random() * Math.floor(2))
    setTimeout(() => {
      resolve(JSON.stringify({ "imageUrl": `${IMAGE_URL}/${itemNumber}/200`, "caption": casual.sentence }) + '\n');
    }, (randomTimeoutMiliSeconds * 200));
  });
};

app.get('/feed', async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const pageNumber = req.query.page ? req.query.page : 1
  const limit = pageNumber * ITEMS_PER_PAGE;
  const start = limit - ITEMS_PER_PAGE;
  for (let i = start; i < limit; i++) {
    try {
      const item = await getItem(i);
      res.write(item)
    } catch (error) {
      console.log(error)
      res.send('Error getting feed')
    }
  }
  res.end();
});

app.listen(3001, function () {
  console.log("Server running on http://localhost:3001")
});