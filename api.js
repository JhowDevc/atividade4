
  // Fetching testimonial data from the JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json()) // Parsing the JSON response
    .then(data => {
      const testimonialContainer = document.getElementById('testimonial-cards');

      // Clear any existing content (optional)
      testimonialContainer.innerHTML = '';

      // Iterate through the fetched data and dynamically create the testimonial cards
      data.forEach(testimonial => {
        const testimonialCard = `
          <div class="col-md-4">
            <blockquote class="blockquote">
              <p>"${testimonial.body}"</p>
              <footer class="blockquote-footer">${testimonial.name}, ${testimonial.email}</footer>
            </blockquote>
          </div>
        `;
        testimonialContainer.innerHTML += testimonialCard;
      });
    })
    .catch(error => console.error('Error fetching testimonials:', error));

