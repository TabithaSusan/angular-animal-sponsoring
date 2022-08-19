const express = require('express');

function createRouter8(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/DonationAmounts', (req, res, next) => {
    db.query(
      'INSERT INTO DonationAmounts VALUES(?, ?)',
      [req.body.AmountID, req.body.Amount],
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

  router.get('/DonationAmounts', function (req, res, next) {
    db.query(
      'SELECT * FROM DonationAmounts',  // ORDER BY Species',
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
  
  router.put('/DonationAmounts/:AmountID', function (req, res, next) {
    db.query(
      'UPDATE DonationAmounts SET Amount=? WHERE AmountID=?',
      [req.body.AmountID, req.body.Amount],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/DonationAmounts/:AmountID', function (req, res, next) {
    db.query(
      'DELETE FROM DonationAmounts WHERE AmountID=?',
      [req.body.AmountID],
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

module.exports = createRouter8;