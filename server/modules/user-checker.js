var config = require('../config/config.js');
var pg = require('pg');

var pool = new pg.Pool(config);

var userChecker = function(req, res, next) {
  console.log("User checker running");
  var email = req.decodedToken.email;
  console.log("EMAIL:", email);
  pool.connect()
    .then(function(client) {
      client.query('SELECT * FROM users WHERE email = $1', [email])
        .then(function(result) {
          client.release();
          console.log("result.rows: ", result.rows);
          console.log("result.rowCount: ", result.rowCount);
          console.log("result.rows[0]", result.rows[0]);
          switch (result.rowCount) {
            case 0:
              console.log("That user email is not in the DB");
              res.sendStatus(403);
              break;
            case 1:
              console.log("Case 1 hit");
              if (result.rows[0].authorized == "true" && result.rows[0].can_add_users == "true") {
                console.log("They are authorized, and can edit users");
                req.authorized = true;
                req.canEdit = true;
                next();
                break;
              } else if (result.rows[0].authorized == "true" && result.rows[0].can_add_users == "false") {
                console.log("They are authorized, but cannot edit users");
                req.authorized = true;
                req.canEdit = false;
                next();
                break;
              } else if (result.rows[0].authorized == "false") {
                console.log("But they are not authorized");
                req.authorized = false;
                req.canEdit = false;
                next();
                break;
              }
          }
        })
        .catch(function(err) {
          console.log("Query error searching users DB: ", err);
          res.sendStatus(500);
        })
    })


};//end userChecker

module.exports = { user: userChecker };
