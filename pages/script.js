document.getElementById('review-form').addEventListener('submit', function(event) {
                    event.preventDefault();
                
                    const userName = document.getElementById('user-name').value;
                    const reviewText = document.getElementById('review-text').value;
                    const rating = document.querySelector('input[name="rating"]:checked').value;
                
                    const reviewDisplay = document.getElementById('reviews-display');
                    const newReview = document.createElement('div');
                    newReview.classList.add('review');
                
                    newReview.innerHTML = `
                        <p><strong>${userName}</strong></p>
                        <p>${reviewText}</p>
                        <div class="star-rating">${'⭐'.repeat(rating)}</div>
                    `;
                
                    reviewDisplay.appendChild(newReview);
                
                    document.getElementById('review-form').reset();
                });
