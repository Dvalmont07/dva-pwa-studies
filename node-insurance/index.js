const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {saveInsurance, insurancesList} = require('./insurance-service');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: true,
  credentials: true
}));
app.route('/api/insurances')
.get(insurancesList)
.post(saveInsurance);

const HOST = 'localhost';
const PORT = 9000;
const httpServer = app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
})
