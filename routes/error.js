const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    res.status(404).send('<h1>Error Page not foundh1>');
  });

module.exports = router;