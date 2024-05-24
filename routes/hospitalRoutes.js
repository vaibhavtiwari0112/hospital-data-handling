const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

router.get('/hospital-details', hospitalController.getHospitalDetails);

module.exports = router;
