var makerjs = require('makerjs');
var HalfBandClamp = require('./index');
var h = new HalfBandClamp(12.7, 3, 12, 5);

console.log(makerjs.exporter.toDXF(h));
