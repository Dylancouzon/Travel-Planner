const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const TravellerData = await Traveller.findAll({
      include: [{ model: Trip }],
    });
    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const TravellerData = await Traveller.findByPk(req.params.id,{
      include: [{ model: Trip }],
    });
    if (!TravellerData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const TravellerData = await Traveller.create({
      location_name: req.body.location_name,
    });
    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const TravellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!TravellerData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
