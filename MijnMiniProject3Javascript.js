// Variabelen voor formuliervalidatie
let form = document.getElementById('contact-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');

// Functie voor validatie van het formulier
function validateForm(event) {
    let errors = false;

    // Verwijder oude foutmeldingen
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    // Controleer of de naam is ingevuld
    if (nameInput.value === '') {
        showError(nameInput, 'Naam is verplicht.');
        errors = true;
    }

    // Controleer of de e-mail een geldig adres bevat
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        showError(emailInput, 'Voer een geldig e-mailadres in.');
        errors = true;
    }

    // Stop het verzenden als er fouten zijn
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

// Voeg de validatie toe aan het formulier
form.addEventListener('submit', validateForm);

// Scroll-to-top knop functionaliteit
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = "⬆️";
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Laat de knop zien of verberg deze op basis van de scroll-positie
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll soepel naar boven bij een klik
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamische navigatie-highlight (extra functionaliteit)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

// Controleer welke sectie in beeld is en markeer de bijbehorende link
window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Geef actieve links een visuele stijl
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
