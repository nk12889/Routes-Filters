const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Enter Name"><br><input type="text" name="size"placeholder="Enter Size"><br><button type="submit">Add Product</button></form>');
  });

  router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;