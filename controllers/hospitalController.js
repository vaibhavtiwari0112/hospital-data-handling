const db = require('../config/db');

exports.getHospitalDetails = (req, res) => {
    const hospital_id = req.body.hospital_id;

    const hospitalQuery = 'SELECT name FROM hospitals WHERE id = ?';
    const psychiatristsQuery = `
        SELECT p.id, p.name, COUNT(pa.id) AS patient_count
        FROM psychiatrists p
        LEFT JOIN patients pa ON pa.psychiatrist_id = p.id
        WHERE p.hospital_id = ?
        GROUP BY p.id`;

    db.query(hospitalQuery, [hospital_id], (err, hospitalResult) => {
        if (err) throw err;
        if (hospitalResult.length === 0) return res.status(404).send({"message":'Hospital not found'});

        db.query(psychiatristsQuery, [hospital_id], (err, psychiatristResult) => {
            if (err) throw err;

            const totalPsychiatrists = psychiatristResult.length;
            const totalPatients = psychiatristResult.reduce((acc, psychiatrist) => acc + psychiatrist.patient_count, 0);

            res.json({
                hospital_name: hospitalResult[0].name,
                total_psychiatrist_count: totalPsychiatrists,
                total_patient_count: totalPatients,
                psychiatrists: psychiatristResult
            });
        });
    });
};
