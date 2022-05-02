const {INSURANCES} = require("./in-memory-db");
exports.saveInsurance = (req, res, next) => {
  const insurance = req.body;
  INSURANCES.push(insurance);

    console.log("Insurance added x",insurance);
    console.log("ns", INSURANCES);
    res.status(200).json(INSURANCES);

}
exports.getInsurance = (req, res) => {
  //res.send(INSURANCES);
  res.status(200).json(INSURANCES);
}
