const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  //To select the areas for username login and password login:
  //We need a id = "username-login" in the homepage.hbs
  //We need a id = "password-login" in the homepage.hbs 
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
   
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      // Won't be replace('/profile'); for our project
      document.location.replace('/postDogs'); 
    } else {
      alert(response.statusText);
    }
  }
};

//IS REPLACE /postDogs CORRECT?


//Take values from signup form and make a new user profile
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });


    //Won't be replace('/profile') for our project - will probably just go to the main page to view or create dogs
    if (response.ok) {
      document.location.replace('/postDogs');
    } else {
      alert(response.statusText);
    }
  }
};

//need a class="form login-form" and a type="submit" to target this form's input
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


//need a class="form signup-form" to target this form's input
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
