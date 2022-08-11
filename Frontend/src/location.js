const express = require('express');

function createRouter(database) {
  const router = express.Router();
  const owner = '';

  
  router.post('/Location', (req, res, next) => {
    database.query(
      'INSERT INTO Location VALUES(?, ?, ?)',
      [req.body.LocationID, req.body.LocationName, req.body.Kind],
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

  router.get('/Location', function (req, res, next) {
    database.query(
      'SELECT * FROM Location',  // ORDER BY Species',
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
  
  router.put('/Location/:LocationName', function (req, res, next) {
    database.query(
      'UPDATE Location SET LocationID=?, LocationName=?, Kind=? WHERE LocationsName=?',
      [req.body.LocationID, req.body.LocationName, req.body.Kind],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/Location/:LocationName', function (req, res, next) {
    database.query(
      'DELETE FROM Location WHERE LocationName=?',
      [req.params.Titel],
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

module.exports = createRouter;