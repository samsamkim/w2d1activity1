var getHTML = require('../step5');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function reverseHTML (html) {
  console.log(html.split('').reverse().join(''));
};


getHTML(requestOptions, reverseHTML);