var https = require('https');



function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    var addedChunks = "";
    response.on('data', function (data){
      addedChunks += data;
      console.log(addedChunks);
    })


  })
}



getAndPrintHTML();