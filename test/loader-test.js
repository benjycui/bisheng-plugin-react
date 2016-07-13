var loader = require('../lib/jsonml-react-loader.js');

var fs = require('fs');
var path = require('path')

var content = fs.readFileSync(path.join(__dirname, './abc.jsx')).toString();

var cload = {
  cacheable: null,
  query: '?noreact=true&lang=__react',
  loader: loader,
}

var c = cload.loader(content);

fs.writeFileSync(path.join(__dirname, 'abc-out2.jsx'), c)