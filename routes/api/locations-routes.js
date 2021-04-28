const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id);
    if (!locationData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create({
      location_name: req.body.location_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!locationData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
