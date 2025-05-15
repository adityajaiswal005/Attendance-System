const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

// Get attendance by userId
router.get('/:userId', async (req, res) => {
  try {
    const records = await Attendance.find({ userId: req.params.userId });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark attendance
router.post('/', async (req, res) => {
  const { userId, date, status } = req.body;
  try {
    let record = await Attendance.findOne({ userId, date });
    if (record) {
      record.status = status;
    } else {
      record = new Attendance({ userId, date, status });
    }
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;