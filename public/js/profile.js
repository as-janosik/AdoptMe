const newFormHandler = async (event) => {
  event.preventDefault();

  //Need id="dog-name" and id="breed"

  const name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#breed').value.trim();


  //Only need name and breed - id (autoinc), date_added (date.NOW), available (default: true), addedBy (the user) - can all default or auto create

  //ALSO - need '/api/dogs' to be the route to that

  if (name && breed) {
    const response = await fetch(`/api/dogs`, {
      method: 'POST',
      body: JSON.stringify({ name, breed }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //Probably not replace('/profile') - maybe just '/dogs' for a view of all dogs
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

//this is where we select the button that has whichever dog-id and delete it

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dogs/${id}`, {
      method: 'DELETE',
    });

    //Probably not replace('/profile') - maybe just '/dogs' for a view of all dogs
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

//need form class="form new-post-form" right at the top of the form so it can select that - and then listen for the <button type ="submit" ...

document
  .querySelector('.new-dog-form')
  .addEventListener('submit', newFormHandler);

  //need div class="post-list" right at the top of the div so it can select that - and then listen for the click on the button within the div -  <button class="btn" data-id="{{dog.id}}">DELETE</button>

document
  .querySelector('.dog-list')
  .addEventListener('click', delButtonHandler);
