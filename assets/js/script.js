"use strict"

function mailer() {
    emailjs.init("service_ee5ksai");
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher l'envoi par défaut du formulaire
    
        emailjs.sendForm('service_ee5ksai', 'your_template_id', this)
            .then(function() {
                alert('Email envoyé avec succès!');
            }, function(error) {
                alert('Erreur lors de l\'envoi de l\'email : ' + JSON.stringify(error));
            });
    });
};
