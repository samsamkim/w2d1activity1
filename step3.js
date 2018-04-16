var https = require('https');



function getAndPrintHTML (options) {




  https.get(options, function(response){
  response.setEncoding('utf8');

    var addedChunks = "";
    response.on('data', function (data){
      addedChunks += data;
      console.log(addedChunks);
    })

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);