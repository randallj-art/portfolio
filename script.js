(function() {
    "use strict"; // Enable strict mode within this function scope

    // ===============================
    // Variables and Selectors
    // ===============================
    var artworks = document.querySelectorAll('.artwork img'); // Select all artwork images
    var lightbox = document.createElement('div'); // Create lightbox element
    lightbox.classList.add('lightbox'); // Add lightbox class
    document.body.appendChild(lightbox); // Append lightbox to body

    // ===============================
    // Functions
    // ===============================

    // Function to open lightbox with clicked image and information
    function openLightbox(artwork) {
        var img = document.createElement('img'); // Create an img element for the lightbox
        img.src = artwork.src; // Set the source to the clicked artwork's source

        // Create the text box div
        var textBoxDiv = document.createElement('div');
        textBoxDiv.classList.add('text-box');

        // Fetch artwork details from the data attributes
        var title = artwork.parentElement.getAttribute('data-title');
        var year = artwork.parentElement.getAttribute('data-year');
        var dimensions = artwork.parentElement.getAttribute('data-dimensions');
        var materials = artwork.parentElement.getAttribute('data-materials');
        var description = artwork.parentElement.getAttribute('data-description');
        var forSale = artwork.parentElement.getAttribute('data-for-sale');
        var price = artwork.parentElement.getAttribute('data-price');

        // Create the fixed text content
        textBoxDiv.innerHTML = `
            <h3>${title}</h3>
            <p> ${year}</p>
            <p> ${dimensions}</p>
            <p> ${materials}</p>
            <p> ${forSale}</p>
            <p> ${price}</p>
            <br> <!-- Line break here -->
            <p> ${description}</p>
        `;
        
        lightbox.innerHTML = ''; // Clear previous content
        lightbox.appendChild(img); // Append the image
        lightbox.appendChild(textBoxDiv); // Append the fixed text box
        
        lightbox.style.display = 'flex'; // Show the lightbox
    }

    // Function to close the lightbox
    function closeLightbox(event) {
        // Close if clicked on lightbox background (outside image or text) or text box itself
        if (event.target === lightbox || event.target.closest('.text-box')) {
            lightbox.style.display = 'none'; // Hide the lightbox
        }
    }

    // ===============================
    // Event Listeners
    // ===============================

    // Add click event listeners to each artwork image
    artworks.forEach(function(artwork) {
        artwork.addEventListener('click', function(event) {
            openLightbox(artwork); // Open lightbox on click
            event.stopPropagation(); // Prevent click from propagating to the lightbox container
        });
    });

    // Add click event listener to lightbox for closing it
    lightbox.addEventListener('click', closeLightbox); // Close lightbox on click outside or on text box
})();
