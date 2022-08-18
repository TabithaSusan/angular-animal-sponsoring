 var express  = require('express'); 
 var app      = express();                               
 var path     = require('path'); 
 var mysql    = require('mysql'); 
 const { Console } = require('console');


 app.use(express.static(path.join(__dirname, '/dist/angular-animal-sponsering-app')));  
 
 app.get('/', function(req,res) 
 {     
      res.sendFile('index.html', { root: __dirname + '/dist/angular-animal-sponsering-app' });             
 });

 app.get('/PhotoGallery', function(req,res) 
 {
     var con = mysql.createConnection({
          database: "22_AWD_Gruppe1",
          host: "195.37.176.178",
          port: "20133",
          user: "22_AWD_Grp_1",
          password: "yoJ]1mjNZyraxyDEdHai"
     });

     con.connect(function (err) {
          if (err) throw err;
          console.log("Connected!");
      

          con.query("SELECT * FROM PhotoGallery", function (err, results, fields) {
               if (err) throw err;
                console.log(results);
                res.send(results);
          
                con.end(function (err) {
                  if (err) throw err;
                  console.log("Disconnected!");
                });
          });
     });
});

app.get('/Location', function(req,res) 
 {
     var con = mysql.createConnection({
          database: "22_AWD_Gruppe1",
          host: "195.37.176.178",
          port: "20133",
          user: "22_AWD_Grp_1",
          password: "yoJ]1mjNZyraxyDEdHai"
     });

     con.connect(function (err) {
          if (err) throw err;
          console.log("Connected!");

          con.query("SELECT * FROM Location", function (err, results, fields) {
               if (err) throw err;
                console.log(results);
                res.send(results);
          
                con.end(function (err) {
                  if (err) throw err;
                  console.log("Disconnected!");
                });
          });

     });
});

app.listen(4200, function () {
     console.log("App listening on port 4200");
});