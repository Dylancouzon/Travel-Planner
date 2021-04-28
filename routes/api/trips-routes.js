const router = require('express').Router();
const { Category, Product } = require('../../models');

router.post('/', (req, res) => {
  //* creates trip data between associated travellers and locations.
  try {
    const tripData = await Trip.create({
      reader_id: req.body.reader_id,{ 
        include: [{ model: Traveller }, { model: Location } ],
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  //   removes a trip and returns a successful response in Insomnia Core.
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) { //* if no tag found with that id return this message
      res.status(404).json({ message: 'No trip found with that id!' });
      return;
    }

    res.status(200).json(tripData); //* all good 
  } catch (err) {
    res.status(500).json(err); //* unspecified server error
  }
});

module.exports = router;
