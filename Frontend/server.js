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

app.get('/Animals', function(req,res) 
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

          con.query("SELECT * FROM Animals", function (err, results, fields) {
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

app.get('/AnimalTyp', function(req,res) 
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

          con.query("SELECT * FROM AnimalTyp", function (err, results, fields) {
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

app.get('/Appointments', function(req,res) 
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

          con.query("SELECT * FROM Appointments", function (err, results, fields) {
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

app.get('/Costumer', function(req,res) 
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

          con.query("SELECT * FROM Costumer", function (err, results, fields) {
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

app.get('/Countries', function(req,res) 
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

          con.query("SELECT * FROM Countries", function (err, results, fields) {
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

app.get('/DonationAmounts', function(req,res) 
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

          con.query("SELECT * FROM DonationAmounts", function (err, results, fields) {
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

app.get('/Donations', function(req,res) 
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

          con.query("SELECT * FROM Donations", function (err, results, fields) {
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

app.get('/Facilities', function(req,res) 
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

          con.query("SELECT * FROM Facilities", function (err, results, fields) {
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

app.get('/FacilityTyp', function(req,res) 
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

          con.query("SELECT * FROM FacilityTyp", function (err, results, fields) {
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

app.get('/PaymentMethodCostumer', function(req,res) 
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

          con.query("SELECT * FROM PaymentMethodCostumer", function (err, results, fields) {
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

app.get('/Sponsorships', function(req,res) 
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

          con.query("SELECT * FROM Sponsorships", function (err, results, fields) {
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

app.get('/SponsorTyp', function(req,res) 
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

          con.query("SELECT * FROM SponsorTyp", function (err, results, fields) {
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