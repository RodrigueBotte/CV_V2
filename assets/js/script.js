"use strict"

// function mailer() {
//     emailjs.init("service_ee5ksai");
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Empêcher l'envoi par défaut du formulaire
    
//         emailjs.sendForm('service_ee5ksai', 'your_template_id', this)
//             .then(function() {
//                 alert('Email envoyé avec succès!');
//             }, function(error) {
//                 alert('Erreur lors de l\'envoi de l\'email : ' + JSON.stringify(error));
//             });
//     });
// };

const main = document.querySelector('main');
if (document.querySelector('.headIntro')) {
    document.querySelector('.headIntro').classList.add('hover-effect');
}

function scrollEffect(mainSection, spanHeader) {
    main.addEventListener('scroll', function() {
        const introSection = document.querySelector(mainSection);
        const firstSpan = document.querySelector(spanHeader);
    
        const scrollPosition = main.scrollTop + main.clientHeight / 2;
        const sectionTop = introSection.offsetTop;
        const sectionHeight = introSection.offsetHeight;
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            firstSpan.classList.add('hover-effect');
        }
        else{
            firstSpan.classList.remove('hover-effect');
        }
    })
}
scrollEffect('.intro', '.headIntro');
scrollEffect('.propos', '.headPropos');
scrollEffect('.stack', '.headStack');
scrollEffect('.portf', '.headPortf');
scrollEffect('.contact', '.headContact');

function scrollInto(mainSection, spanHeader) {
    const spanClick = document.querySelector(spanHeader);
    const mainContact = document.querySelector(mainSection);
    spanClick.addEventListener('click', (event)=>{
        event.preventDefault();
        mainContact.scrollIntoView({behavior: "smooth"})
    })
}
scrollInto('.intro', '.headIntro');
scrollInto('.propos', '.headPropos');
scrollInto('.stack', '.headStack');
scrollInto('.portf', '.headPortf');
scrollInto('.contact', '.headContact');