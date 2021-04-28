const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
// returns all traveller data without associated trips in Insomnia Core.
});

router.get('/:id', (req, res) => {
// returns a single traveller's data with their associated trips and a list of locations in Insomnia Core. 
});

router.post('/', (req, res) => {
  // creates traveller data and returns a successful response in Insomnia Core.
});

router.delete('/:id', (req, res) => {
  //  removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.
});

module.exports = router;
