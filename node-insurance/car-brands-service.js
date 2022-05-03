const {
  CARBRANDS
} = require("./in-memory-db");

exports.getCarBrand = (req, res) => {
  setTimeout(() => {
    res.status(200).json(CARBRANDS);
  }, 3000);

}
