var getHTML = require('../step5');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function lowerHTML (html) {
  console.log(html.toLowerCase());
};


getHTML(requestOptions, lowerHTML);