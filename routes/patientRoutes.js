const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const checkPatientExists = require('../middleware/checkPatientExists');
const patientController = require('../controllers/patientController');

router.post('/register-patient', upload.single('photo'), checkPatientExists, patientController.registerPatient);
router.delete('/delete-patient/:id', patientController.deletePatient);

module.exports = router;
