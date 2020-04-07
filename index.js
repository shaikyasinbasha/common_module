const auth = require('./platformData');
const services = require('./platformApi');

module.exports = {
    auth,
    ...services
};