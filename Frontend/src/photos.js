const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  
  router.post('/PhotoGallery', (req, res, next) => {
    database.query(
      'INSERT INTO PhotoGallery VALUES(?, ?, ?, ?, ?, ?, ?)',
      [req.body.ID, req.body.Species, req.body.Location, req.body.Likes, req.body.Pic, req.body.Tag1, req.body.Tag2],
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

  router.get('/PhotoGallery', function (req, res, next) {
    database.query(
      'SELECT * FROM PhotoGallery',  // ORDER BY Species',
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
  
  router.put('/PhotoGallery/:Species', function (req, res, next) {
    database.query(
      'UPDATE buecher SET ID=?, Species=?, Location=?, Likes=?, Pic=?, Tag1=?, Tag2=? WHERE Species=?',
      [req.body.ID, req.body.Species, req.body.Location, req.body.Likes, req.body.Pic, req.body.Tag1, req.body.Tag2],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/PhotoGallery/:Species', function (req, res, next) {
    database.query(
      'DELETE FROM PhotoGallery WHERE Species=?',
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