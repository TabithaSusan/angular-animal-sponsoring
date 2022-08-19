const express = require('express');

function createRouter3(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Animals', (req, res, next) => {
    db.query(
      'INSERT INTO Animals VALUES(?, ?, ?, ?, ?)',
      [req.body.AnimalID, req.body.AnimalTypID, req.body.Name, req.body.Birthdate, req.body.Deathday],
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

  router.get('/Animals', function (req, res, next) {
    db.query(
      'SELECT * FROM Animals',  // ORDER BY Species',
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
  
  router.put('/Animals/:AnimalID', function (req, res, next) {
    db.query(
      'UPDATE Animals SET AnimalTypID=?, Name=?, Birthdate=?, Deathday=? WHERE AnimalID=?',
      [req.body.AnimalID, req.body.AnimalTypID, req.body.Name, req.body.Birthdate, req.body.Deathday],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Animals/:AnimalID', function (req, res, next) {
    db.query(
      'DELETE FROM Animals WHERE AnimalID=?',
      [req.body.AnimalID],
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

module.exports = createRouter3;