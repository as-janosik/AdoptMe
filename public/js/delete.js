const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      console.log("working");
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/dog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/viewdogs');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
document
  .querySelector('.dog')
  .addEventListener('click', delButtonHandler)