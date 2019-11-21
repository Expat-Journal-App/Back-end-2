const Stories = require('../helpersmodels');

module.exports = {
  validityCheck
};

function validityCheck(req, res, next) {
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