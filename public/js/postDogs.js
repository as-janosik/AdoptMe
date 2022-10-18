const imageToBase64 = require('image-to-base64');
const request = require('request');

function loadimage(passedFile){
    console.log(passedFile);
    imageToBase64(passedFile)// Path to the image
    .then(
        (response) => {
            //console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
            makeCall(response);
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )}

function makeCall(inString){
    var options = {
        'method': 'POST',
        'url': 'https://api.imgur.com/3/upload',
        'headers': {
            'Authorization': 'Bearer 5eeae49394cd929e299785c8805bd168fc675280'
        },
        formData: {
            'image': inString,
            'type':'base64'
        }
    };
    //console.log(options);

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});}

// input.addEventListener('click', loadimage);
//const fileInput = document.getElementById('input');
// input.onchange = () => {
//   const selectedFile = input.files[0];
//   loadimage(selectedFile);
//   console.log(selectedFile);
// }

document
  .getElementById('dog-photo')
  .addEventListener('click', loadimage);

  //response.body.data.link
