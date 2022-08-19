const express = require('express');

function createRouter14(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/SponsorTyp', (req, res, next) => {
    db.query(
      'INSERT INTO SponsorTyp VALUES(?, ?, ?)',
      [req.body.SponsortTypID, req.body.SponsorClass, req.body.Price],
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

  router.get('/SponsorTyp', function (req, res, next) {
    db.query(
      'SELECT * FROM SponsorTyp',  // ORDER BY Species',
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
  
  router.put('/SponsorTyp/:SponsortTypID', function (req, res, next) {
    db.query(
      'UPDATE SponsorTyp SET SponsorClass=?, Price=? WHERE SponsortTypID=?',
      [req.body.SponsortTypID, req.body.SponsorClass, req.body.Price],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/SponsorTyp/:SponsortTypID', function (req, res, next) {
    db.query(
      'DELETE FROM SponsorTyp WHERE SponsortTypID=?',
      [req.body.SponsortTypID],
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

module.exports = createRouter14;