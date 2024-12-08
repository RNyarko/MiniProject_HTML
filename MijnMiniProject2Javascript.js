// Krijg het formulier en de invoervelden
let form = document.getElementById('contact-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');

// Functie om het formulier te valideren
function validateForm(event) {
    let errors = false;

    // Verwijder oude foutmeldingen
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    // Naam validatie
    if (nameInput.value === '') {
        showError(nameInput, 'Naam is verplicht.');
        errors = true;
    }

    // E-mail validatie
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        showError(emailInput, 'Voer een geldig e-mailadres in.');
        errors = true;
    }

    // Voorkom het verzenden als er fouten zijn
    if (errors) {
        event.preventDefault();
    }
}

// Functie om foutmeldingen te tonen
function showError(input, message) {
    let error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.textContent = message;
    input.insertAdjacentElement('afterend', error);
}

// Eventlistener voor formulierverzending
form.addEventListener('submit', validateForm);
