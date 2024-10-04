
function submitContactForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        document.getElementById('contact-msg').innerHTML = 'Please fill all fields.';
        return;
    }

    document.getElementById('contact-msg').innerHTML = 'Thank you for contacting us, ' + name + '. We will get back to you soon!';
    document.getElementById('contact-form').reset();
}
