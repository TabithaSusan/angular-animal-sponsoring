const express = require('express');

function createRouter6(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Costumer', (req, res, next) => {
    db.query(
      'INSERT INTO Costumer VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.body.CostumerID, req.body.FirstName, req.body.Surname, req.body.Street, req.body.Housenumber, req.body.Zipcode, req.body.CountrysID, req.body.Email, req.body.HashedPassword, req.body.PaymentMethodID, req.body.City],
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

  router.get('/Costumer', function (req, res, next) {
    db.query(
      'SELECT * FROM Costumer',  // ORDER BY Species',
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
  
  router.put('/Costumer/:CostumerID', function (req, res, next) {
    db.query(
      'UPDATE Costumer SET FirstName=?, Surname=?, Street=?, Housenumber=?, Zipcode=?, CountrysID=?, Email=?, HashedPassword=?, PaymentMethodID=?, City=? WHERE CostumerID=?',
      [req.body.CostumerID, req.body.FirstName, req.body.Surname, req.body.Street, req.body.Housenumber, req.body.Zipcode, req.body.CountrysID, req.body.Email, req.body.HashedPassword, req.body.PaymentMethodID, req.body.City],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Costumer/:CostumerID', function (req, res, next) {
    db.query(
      'DELETE FROM Costumer WHERE CostumerID=?',
      [req.body.CostumerID],
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

module.exports = createRouter6;