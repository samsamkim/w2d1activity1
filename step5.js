module.exports = function getHTML (options, callback) {

  var https = require('https');

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
  }
};
