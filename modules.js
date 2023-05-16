const { people, ages } = require('./people');
const os = require('os');

console.log('xyz => ', people, ages);
console.log('platform', os.platform(), 'homedir', os.homedir());