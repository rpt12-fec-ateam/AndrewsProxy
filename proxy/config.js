const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  andrew : process.env.ANDREW_BUNDLE,
  heather : process.env.HEATHER_BUNDLE,
  anait : process.env.ANAIT_BUNDLE,
  aarushi : process.env.AARUSHI_BUNDLE
}