//Logout function

const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  //If it logs out successfully, go to the home page
//Would it be replace /main?
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

//Need an id = "logout" to select that button to logout with on click
document.querySelector('#logout').addEventListener('click', logout);
