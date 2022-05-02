const {INSURANCES} = require("./in-memory-db");
exports.saveInsurance = (req, res) => {
  const insurance = req.body;

  INSURANCES.push(insurance);
  console.log("Insurance added x", insurance, INSURANCES);
}
exports.insurancesList = (req, res) => {
  res.status(200).json(INSURANCES);
}
