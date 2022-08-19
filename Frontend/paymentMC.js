const express = require('express');

function createRouter12(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/PaymentMethodCostumer', (req, res, next) => {
    db.query(
      'INSERT INTO PaymentMethodCostumer VALUES(?, ?)',
      [req.body.PaymentMethodID, req.body.PaymentMethod],
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

  router.get('/PaymentMethodCostumer', function (req, res, next) {
    db.query(
      'SELECT * FROM PaymentMethodCostumer',  // ORDER BY Species',
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
  
  router.put('/PaymentMethodCostumer/:PaymentMethodID', function (req, res, next) {
    db.query(
      'UPDATE PaymentMehodCostumer SET PaymentMethod=? WHERE PaymentMethodID=?',
      [req.body.PaymentMethodID, req.body.PaymentMethod],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/PaymentMethodCostumer/:PaymentMethodID', function (req, res, next) {
    db.query(
      'DELETE FROM PaymentMethodCostumer WHERE PaymentMethodID=?',
      [req.body.PaymentMethodID],
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

module.exports = createRouter12;