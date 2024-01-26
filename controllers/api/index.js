const router = require('express').Router();
const reservationRoutes = require('./reservationRoutes');

router.use('/reservation', reservationRoutes);

module.exports = router;
