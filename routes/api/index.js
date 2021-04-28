const router = require('express').Router();
const travellersRoutes = require('./travellers-routes');
const locationsRoutes = require('./locations-routes');
const tripsRoutes = require('./trips-routes');

router.use('/travellers', travellersRoutes);
router.use('/locations', locationsRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
