var getHTML = require('../step5');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function upperHTML (html) {
  console.log(html.toUpperCase());
};


getHTML(requestOptions, upperHTML);