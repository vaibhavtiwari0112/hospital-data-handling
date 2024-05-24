const db = require('../config/db');

const checkPatientExists = (req, res, next) => {
    const { name, email, phone, psychiatrist_id } = req.body;

    const query = 'SELECT * FROM patients WHERE (name = ? OR email = ? OR phone = ?) AND psychiatrist_id = ?';
    db.query(query, [name, email, phone, psychiatrist_id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return res.status(400).send({ message: 'Patient with the same name, email, or phone already exists for this psychiatrist' });
        }
        next();
    });
};

module.exports = checkPatientExists;
