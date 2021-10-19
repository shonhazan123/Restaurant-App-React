exports.dataController = (req, res) => {
  res.sendFile(__dirname + "/db.json");
};
