const express = require('express');

function createRouter9(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Donations', (req, res, next) => {
    db.query(
      'INSERT INTO Donations VALUES(?, ?, ?, ?, ?)',
      [req.body.DonationID, req.body.CostumerDonatedID, req.body.DateTime, req.body.AmountDonatedID, req.body.DonatedToID],
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

  router.get('/Donations', function (req, res, next) {
    db.query(
      'SELECT * FROM Donations',  // ORDER BY Species',
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
  
  router.put('/Donations/:DonationID', function (req, res, next) {
    db.query(
      'UPDATE Costumer SET CostumerDonatedID=?, DateTime=?, AmountDonatedID=?, DonatedToID=? WHERE DonationID=?',
      [req.body.DonationID, req.body.CostumerDonatedID, req.body.DateTime, req.body.AmountDonatedID, req.body.DonatedToID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Donations/:DonationID', function (req, res, next) {
    db.query(
      'DELETE FROM Donations WHERE DonationID=?',
      [req.body.DonationID],
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

module.exports = createRouter9;