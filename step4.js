var https = require('https');


function getHTML (options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    var addedChunks = "";
    response.on('data', function (data){
      addedChunks += data;
      callback(addedChunks);
       })
    response.on('end', function() {
      callback(null, addedChunks);
    })
  })
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

