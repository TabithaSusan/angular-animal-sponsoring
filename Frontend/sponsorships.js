const express = require('express');

function createRouter13(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Sponsorships', (req, res, next) => {
    db.query(
      'INSERT INTO Sponsorships VALUES(?, ?, ?, ?, ?, ?, ?)',
      [req.body.SponsorshipID, req.body.CostumerAsBuyerID, req.body.FirstName, req.body.Surname, req.body.AnimalLivingInID, req.body.AnimalsID, req.body.SponsorTypID],
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

  router.get('/Sponsorships', function (req, res, next) {
    db.query(
      'SELECT * FROM Sponsorships',  // ORDER BY Species',
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
  
  router.put('/Sponsorships/:SponsorshipID', function (req, res, next) {
    db.query(
      'UPDATE Sponsorships SET CostumerAsBuyerID=?, FirstName=?, Surname=?, AnimalLivingInID=?, AnimalsID=?, SponsorTypID=? WHERE SponsorshipID=?',
      [req.body.SponsorshipID, req.body.CostumerAsBuyerID, req.body.FirstName, req.body.Surname, req.body.AnimalLivingInID, req.body.AnimalsID, req.body.SponsorTypID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Sponsorships/:SponsorshipID', function (req, res, next) {
    db.query(
      'DELETE FROM Sponsorships WHERE SponsorshipID=?',
      [req.body.SponsorshipID],
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

module.exports = createRouter13;