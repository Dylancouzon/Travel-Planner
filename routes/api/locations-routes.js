const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
// returns all location data in Insomnia Core.
});

router.get('/:id', (req, res) => {
// returns a single location's data, with its associated trips, in Insomnia Core. 
});

router.post('/', (req, res) => {
  // creates location data and returns a successful response in Insomnia Core.
});

router.delete('/:id', (req, res) => {
  //   removes a location and any trips associated with it and returns a successful response in Insomnia Core.
});

module.exports = router;
