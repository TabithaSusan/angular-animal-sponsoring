const express = require('express');

function createRouter4(db) {
  const router = express.Router();
  const owner = '';
  
  router.post('/AnimalTyp', (req, res, next) => {
    db.query(
      'INSERT INTO AnimalTyp VALUES(?, ?)',
      [req.body.AnimalTypID, req.body.AnimalTyp],
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

  router.get('/AnimalTyp', function (req, res, next) {
    db.query(
      'SELECT * FROM AnimalTyp',  // ORDER BY Species',
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
  
  router.put('/AnimalTyp/:AnimalTypID', function (req, res, next) {
    db.query(
      'UPDATE AnimalTyp SET AnimalTyp=? WHERE AnimalTypID=?',
      [req.body.AnimalTypID, req.body.AnimalTyp],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/AnimalTyp/:AnimalTypID', function (req, res, next) {
    db.query(
      'DELETE FROM AnimalTyp WHERE AnimalTypID=?',
      [req.body.AnimalTypID],
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

module.exports = createRouter4;