const express = require('express');

function createRouter5(db) {
  const router = express.Router();
  const owner = '';
  
  router.post('/Appointments', (req, res, next) => {
    db.query(
      'INSERT INTO Appointments VALUES(?, ?, ?, ?)',
      [req.body.AppointmentID, req.body.CostumerAsAppointmentID, req.body.DateTime, req.body.AppointmentInID],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/Appointments', function (req, res, next) {
    db.query(
      'SELECT * FROM Appointments',  // ORDER BY Species',
      [10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  
  router.put('/Appointments/:AppointmentID', function (req, res, next) {
    db.query(
      'UPDATE Appointments SET CostumerAsAppointmentID=?, DateTime=?, AppointmentInID=? WHERE AppointmentID=?',
      [req.body.AppointmentID, req.body.CostumerAsAppointmentID, req.body.DateTime, req.body.AppointmentInID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Appointments/:AppointmentID', function (req, res, next) {
    db.query(
      'DELETE FROM Appointments WHERE AppointmentID=?',
      [req.body.AppointmentID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter5;