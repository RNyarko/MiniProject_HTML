//Krijg het formulier en de invoervelden
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorDiv = document.getElementById('error-messages'); // Een div voor foutmeldingen

//Functie om het formulier te controleren
function validateForm(event) {
    let errors = [];

    //Controleer of de naam ingevuld is
    if (nameInput.value.length === 0) {
        errors.push('Naam is verplicht.');
    }

    //Controleer of de e-mail ingevuld is
    if (emailInput.value.length === 0) {
        errors.push('E-mail is verplicht.');
    } else if (emailInput.value.indexOf('@') === -1 || emailInput.value.indexOf('.') === -1) {
        errors.push('Voer een geldige e-mail in.');
    }

    //Als er fouten zijn, stop met het verzenden 
    if (errors.length > 0) {
        event.preventDefault(); 
        errorDiv.innerHTML = 'Ongeldige gegevens:<br>' + errors.join('<br>');
        errorDiv.style.display = 'block'; // Maak de foutmeldingen zichtbaar
    }
}

//Voeg de controle toe bij formulierverzending
form.addEventListener('submit', validateForm);
