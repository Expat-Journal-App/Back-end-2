const Stories = require("..helpersmodels/helpersmodels");

module.exports = {
  checkValidtyId
};

function checkValidtyId(req, res, next) {
  const { id } = req.params;
  Stories.getStoriesById(id)
    .then(data => {
      if (!data) {
        res.status(404).json({ message: `Story ${id} does not exist` });
      } else {
        req.data = data;
        next();
      }
    })
    .catch(error => {
      console.log(error);
    });
}