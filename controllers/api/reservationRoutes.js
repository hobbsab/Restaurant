const router = require('express').Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allReservations = await Reservation.findAll()

    res.status(200).json(allReservations);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      ...req.body
    });

    res.status(200).json(newReservation);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
