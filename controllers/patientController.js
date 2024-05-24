const db = require('../config/db');
const bcrypt = require('bcryptjs');
const patientSchema = require('../models/patientModel');

exports.registerPatient = (req, res) => {
    const { name, address, email, phone, password, psychiatrist_id } = req.body;

    const photo = req.file ? req.file.path : null;

    const { error } = patientSchema.validate({
        name,
        address,
        email,
        phone,
        password,
        photo,
        psychiatrist_id
    });
 
    if (error) return res.status(400).send({ message: error.details[0].message });

    const checkPsychiatristQuery = 'SELECT * FROM psychiatrists WHERE id = ?';
    db.query(checkPsychiatristQuery, [psychiatrist_id], (err, psychiatristResult) => {
        if (err) throw err;

        if (psychiatristResult.length === 0) {
            return res.status(400).send({ message: 'Psychiatrist not found' });
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            const query = 'INSERT INTO patients (name, address, email, phone, password, photo, psychiatrist_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
            db.query(query, [name, address, email, phone, hash, photo, psychiatrist_id], (err, result) => {
                if (err) throw err;
                res.send({ message: 'Patient registered successfully' });
            });
        });
    });
};

exports.deletePatient = (req, res) => {
    const patientId = req.params.id;

    const query = 'DELETE FROM patients WHERE id = ?';
    db.query(query, [patientId], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Patient not found' });
        }
        res.send({ message: 'Patient deleted successfully' });
    });
};
