const auth = require('./platformData');
const services = require('./platformApi');

// git merge changes in asyncawite-test branch

module.exports = {
    auth,
    ...services
};


//import platformData from "./networking/platformData"
//import authenticate, { getScores } from "./networking/platformApi"

/* module.export = {

} */