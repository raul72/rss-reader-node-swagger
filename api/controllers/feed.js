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
  const feedId = req.swagger.params.feedId.value || null;
  // FIXME: Not Implemented
  res.status(501).json();
}

function getFeedItems(req, res) {
  // FIXME: Not Implemented
  res.status(501).json();
}
