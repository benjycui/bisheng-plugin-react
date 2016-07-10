var loader = require('../lib/jsonml-react-loader.js');
var loader2 = require('../lib/loader.js');

var fs = require('fs');
var path = require('path')

var content = fs.readFileSync(path.join(__dirname, './abc.jsx')).toString();
// 


var a = {
  cacheable: null,
  query: '?noreact=true&lang=__react',
  loader: loader2,
}
var cload = {
  cacheable: null,
  query: '?noreact=true&lang=__react',
  loader: loader,
}

var b = a.loader(content);
var c = cload.loader(content);


fs.writeFileSync(path.join(__dirname, 'abc-out.jsx'), b)
fs.writeFileSync(path.join(__dirname, 'abc-out2.jsx'), c)