var mysql = require('mysql');
var config = require('../../config/config.js');

module.exports = {
  addFeed: addFeed,
  getFeedById: getFeedById,
  getFeedItems: getFeedItems,
};

function addFeed(req, res) {
  // FIXME: Not Implemented
  res.status(501).json();
}

function getFeedById(req, res) {
  var feedId = req.swagger.params.feedId.value || null;
  var connection = mysql.createConnection(config.database);
  connection.connect();
  var sql = "SELECT * FROM feeds WHERE id = ?";
  connection.query(sql, [feedId], function (error, results) {
    if (error) {
      console.log("getFeedById failed", error);
      return;
    }
    if (results && results.length) {
      res.json(results[0]);
    } else {
      res.status(404).json();
    }
  });
  connection.end();
}

function getFeedItems(req, res) {
  // FIXME: pagination
  var feedId = req.swagger.params.feedId.value || null;
  if (!feedId || feedId < 1) {
    res.status(400).json();
    return;
  }
  var connection = mysql.createConnection(config.database);
  connection.connect();
  var sql = "SELECT * FROM items WHERE feed_id = ?";
  connection.query(sql, [feedId], function (error, results) {
    if (error) {
      console.log("getFeedItems failed", error);
      res.status(500).json();
      return;
    }
    if (results && results.length) {
      res.json(results);
    } else {
      res.status(404).json();
    }
  });
  connection.end();
}
