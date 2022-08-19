const express = require('express');

function createRouter7(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Countries', (req, res, next) => {
    db.query(
      'INSERT INTO Countries VALUES(?, ?)',
      [req.body.CountryID, req.body.Country],
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

  router.get('/Countries', function (req, res, next) {
    db.query(
      'SELECT * FROM Countries',  // ORDER BY Species',
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
  
  router.put('/Countries/:CountryID', function (req, res, next) {
    db.query(
      'UPDATE Countries SET Country=? WHERE CountryID=?',
      [req.body.CountryID, req.body.Country],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Countries/:CountryID', function (req, res, next) {
    db.query(
      'DELETE FROM Countries WHERE CountryID=?',
      [req.body.CountryID],
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

module.exports = createRouter7;