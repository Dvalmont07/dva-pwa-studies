const {INSURANCES} = require("./in-memory-db");
exports.saveInsurance = (req, res, next) => {
  const insurance = req.body;
  INSURANCES.push(insurance);
    res.status(200).json(INSURANCES);
}
exports.getInsurance = (req, res) => {
  res.status(200).json(INSURANCES);
}
