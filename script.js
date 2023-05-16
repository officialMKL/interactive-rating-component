const form = document.forms.namedItem('rating-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedRating = form.elements.namedItem('rating').value;

    const submittedRatingText = `You selected ${selectedRating} out of 5`;

    document.getElementById('rating-selection').style.display = 'none';
    document.getElementById('rating-submitted').style.display = 'block';
    document.getElementById('submitted-rating-text').innerText = submittedRatingText;
})
