const express = require('express');

function createRouter10(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Facilities', (req, res, next) => {
    db.query(
      'INSERT INTO Facilities VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
      [req.body.FacilityID, req.body.Name, req.body.Street, req.body.Housenumber, req.body.Zipcode, req.body.City, req.body.CountryID, req.body.FacilityTypeID],
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

  router.get('/Facilities', function (req, res, next) {
    db.query(
      'SELECT * FROM Facilities',  // ORDER BY Species',
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
  
  router.put('/Facilities/:FacilityID', function (req, res, next) {
    db.query(
      'UPDATE Facilities SET Name=?, Street=?, Housenumber=?, Zipcode=?, City=?, CountryID=?, FacilityTypeID=? WHERE FacilityID=?',
      [req.body.FacilityID, req.body.Name, req.body.Street, req.body.Housenumber, req.body.Zipcode, req.body.City, req.body.CountryID, req.body.FacilityTypeID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Facilities/:FacilityID', function (req, res, next) {
    db.query(
      'DELETE FROM Facilities WHERE FacilityID=?',
      [req.body.FacilityID],
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

module.exports = createRouter10;