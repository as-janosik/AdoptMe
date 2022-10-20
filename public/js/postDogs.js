
function loadimage(passedFile) {
    makeCall(passedFile)// Path to the image
}

let selectedFile = null;
const fileInput = document.getElementById('dog-photo');
const button = document.getElementById('dog-button');//
let url = '';

fileInput.onchange = () => {
    selectedFile = fileInput.files[0];
}

button.onclick = () => {
    console.log(selectedFile);
    loadimage(selectedFile);
    event.preventDefault();
}

function makeCall(image) {
    var formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", "ixkixe8n");
    formdata.append("api_key", "649199554825756");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    console.log(requestOptions);

    const obj = fetch("https://api.cloudinary.com/v1_1/dwwrphnmt/image/upload", requestOptions)
        .then(response => response.json())//returns response in Json format
        .then(result => {
            url = result.url;
            makeDogDb();
        })//Gets url where image is saved
        .catch(error => console.log('error', error));
}

const makeDogDb = async (event) => {

     const dog_name = document.querySelector('#dog-name').value.trim();
     const breed = document.querySelector('#dog-breed').value.trim();
     const addedBy = document.querySelector('#user-name').value.trim();//Get userName to pass to DB. 
     //console.log(dogName,dogBreed,url);
                 // {
            //     "dog_name": "Lassy",
            //     "breed": "Good dog",
            //     "available": true,//allow Null
            //     "url":"https://i.imgur.com/c523I1g.jpeg",
            //     "addedBy": "ditchWitch"
            // }
    if (dog_name && breed && url ) {
        const response = await fetch('/api/dog', {
            method: 'POST',
            body: JSON.stringify({ dog_name, breed, url, addedBy }),//Needs to also pass userName
            headers: { 'Content-Type': 'application/json' },
        });

        //Won't be replace('/profile') for our project - will probably just go to the main page to view or create dogs
        if (response.ok) {
            document.location.replace('/postDogs');//if success refresh page.
        } else {
            alert(response.statusText);
        }
    }
};
