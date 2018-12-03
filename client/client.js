var fs = require('fs');
var request = require('request');

request({
    method: 'PUT',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: `http://localhost:8888/upload`,
    formData:{
      file: {
        value:  fs.createReadStream('./test.js'),
        options: {
          filename: './test',
          contentType: 'multipart/form-data'
        }
      }
    }
  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
  })