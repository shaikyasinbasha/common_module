const auth = require('./platformData');
const services = require('./platformApi');

module.exports = {
    auth,
    ...services
};


//import platformData from "./networking/platformData"
//import authenticate, { getScores } from "./networking/platformApi"

/* module.export = {

} */