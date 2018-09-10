const mysql = require("mysql");
const config = require("../../config/config.js");

function addFeed(req, res) {
  // FIXME: Not Implemented
  res.status(501).json();
}

function getFeedById(req, res) {
  const feedId = req.swagger.params.feedId.value || null;
  const connection = mysql.createConnection(config.database);
  connection.connect();
  const sql = "SELECT * FROM feeds WHERE id = ?";
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
  const feedId = req.swagger.params.feedId.value || null;
  if (!feedId || feedId < 1) {
    res.status(400).json();
    return;
  }
  const connection = mysql.createConnection(config.database);
  connection.connect();
  const sql = "SELECT * FROM items WHERE feed_id = ?";
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

module.exports = {
  addFeed,
  getFeedById,
  getFeedItems,
};
