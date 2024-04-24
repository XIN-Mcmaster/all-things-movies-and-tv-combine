const express = require('express');
const router = express.Router();
const movieController= require('../controller/movieController')

// Defining routes
router.get('/', movieController.getMovies);

router.post('/search', movieController.search);

router.get('/getPoster',movieController.getPoster)

module.exports = router;