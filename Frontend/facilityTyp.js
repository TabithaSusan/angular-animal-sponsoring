const express = require('express');

function createRouter11(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/FacilityType', (req, res, next) => {
    db.query(
      'INSERT INTO FacilityType VALUES(?, ?)',
      [req.body.FacilityTypID, req.body.FacilityTyp],
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

  router.get('/FacilityTyp', function (req, res, next) {
    db.query(
      'SELECT * FROM FacilityTyp',  // ORDER BY Species',
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
  
  router.put('/FacilityTyp/:FacilityTypID', function (req, res, next) {
    db.query(
      'UPDATE FacilityTyp SET FacilityType? WHERE FacilityTypID=?',
      [req.body.FacilityTypeID, req.body.FacilityTyp],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/FacilityTyp/:FacilityTypID', function (req, res, next) {
    db.query(
      'DELETE FROM FacilityTyp WHERE FacilityTypID=?',
      [req.body.FacilityTypID],
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

module.exports = createRouter11;