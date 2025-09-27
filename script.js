document.addEventListener('DOMContentLoaded', function() {
  const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    const addMovie = forms['add-movie'];
    const input = addMovie.querySelector('input[type="text"]');
    const addButton = addMovie.querySelector('.add-movie-button');
    let editingLi = null;

    list.addEventListener('click', function(e) {

      const li = e.target.closest('li');

       if (!li) return; // if click outside li, do nothing

        if (e.target.classList.contains('delete')) {
            li.remove(); //removing the li element from the DOM
            
          if (editingLi === li) {
            editingLi = null;   
            input.value = '';
            addButton.textContent = 'Add';
          }
        }
         if (e.target.classList.contains('edit')) {
          if (editingLi) {
            alert("Finish editing the current movie before editing another.");
            return;            
          }
            editingLi = li;
             input.value = li.querySelector('.name').textContent;
             addButton.textContent = "Save"; // show user they're editing
  }
});

    const addMovieForm = forms['add-movie'];
    addMovieForm.addEventListener('submit', function(e) {
        e.preventDefault(); //preventing the default action of the form submission
         
        const value = input.value.trim();
         
        if (!value) {
            alert("Please enter a movie name");
            return;
         }

         if (editingLi) {
            editingLi.querySelector('.name').textContent = value;
            editingLi = null;
            addMovieForm.reset();
            addButton.textContent = 'Add';
            return;
         }
         const li = document.createElement('li');
         const movieName = document.createElement('span');
         const deleteBtn = document.createElement('span');
         const editBtn = document.createElement('span');

         movieName.textContent = value;
         editBtn.textContent = 'Edit';
         deleteBtn.textContent = 'delete';

            movieName.classList.add('name');
            editBtn.classList.add('edit');
            deleteBtn.classList.add('delete');

            li.appendChild(movieName);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            list.appendChild(li);

            addMovieForm.reset(); //clearing the input field after submission';

    });
    editButton.addEventListener('click', function(e) {
        if (editingLi) {
            addMovieForm.reset();
        }
        
    });
    
  });
