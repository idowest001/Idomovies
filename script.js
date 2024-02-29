function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Convert search input to lowercase
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    displayFilteredMovies(filteredMovies);
  }
  

  // Function to display filtered movies
  function displayFilteredMovies(filteredMovies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = ''; // Clear existing content

    filteredMovies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie');
      movieCard.innerHTML = `
        <img src="${movie.imageUrl}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>Genre: ${movie.genre}</p>
        <a href="${movie.downloadLink}" target="_blank">Download</a>
      `;
      moviesContainer.appendChild(movieCard);
    });
  }
  // Function to handle search functionality
  
    // Function to handle search functionality
    function searchMovies() {
        var searchTerm = document.getElementById('searchInput').value;
        // Add your search functionality here
        console.log('Search term:', searchTerm);
    }

    // Function to toggle search input visibility
    function toggleSearchInput() {
        var searchInput = document.getElementById('searchInput');
        searchInput.style.display = searchInput.style.display === 'none' ? 'inline-block' : 'none';
    }

    // Function to toggle menu visibility
    function toggleMenu() {
      var navUl = document.querySelector('nav ul');
      if (navUl.classList.contains('show')) {
          navUl.classList.remove('show');
      } else {
          navUl.classList.add('show');
      }
  }