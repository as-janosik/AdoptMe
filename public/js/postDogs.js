function loadimage(passedFile){
    console.log(passedFile);
    makeCall(passedFile)// Path to the image
}

async function makeCall(inString){
    var options = {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer 5eeae49394cd929e299785c8805bd168fc675280'
        },
        body: JSON.stringify({
            'image': inString,
            'type':'file'
        })
    };
    //console.log(options);
    const response = await fetch('https://api.imgur.com/3/upload', 
        options,
        
    );

    const data = await response.json();
    console.log(data);

// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// })
}

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
