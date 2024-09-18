"use strict"

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les informations du formulaire
    const templateParams = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Envoyer l'e-mail
    emailjs.send('service_ee5ksai', 'template_dvrozr1', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message envoyé avec succès !');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Erreur lors de l\'envoi. Réessayez plus tard.');
        });
});

const main = document.querySelector('main');
if (document.querySelector('.headIntro')) {
    document.querySelector('.headIntro').classList.add('hover-effect');
}

/**
 * la fonction sert à mettre en évidence l'endroit ou l'on se trouve sur la page par rapport au scroll
 * @param {string} mainSection nom de div à cibler dans le main
 * @param {string} spanHeader nom du span a cibler dans le header
 */
function scrollEffect(mainSection, spanHeader) {
    main.addEventListener('scroll', function () {
        const introSection = document.querySelector(mainSection);
        const firstSpan = document.querySelector(spanHeader);

        const scrollPosition = main.scrollTop + main.clientHeight / 2;
        const sectionTop = introSection.offsetTop;
        const sectionHeight = introSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            firstSpan.classList.add('hover-effect');
        }
        else {
            firstSpan.classList.remove('hover-effect');
        }
    })
}
scrollEffect('.intro', '.headIntro');
scrollEffect('.propos', '.headPropos');
scrollEffect('.stack', '.headStack');
scrollEffect('.portf', '.headPortf');
scrollEffect('#contact', '.headContact');

/**
 * La fonction sert à se déplacer sur la page au click sur le header
 * @param {string} mainSection nom de div à cibler dans le main
 * @param {string} spanHeader nom du span a cibler dans le header
 */
function scrollInto(mainSection, spanHeader) {
    const spanClick = document.querySelector(spanHeader);
    const mainContact = document.querySelector(mainSection);
    spanClick.addEventListener('click', (event) => {
        event.preventDefault();
        mainContact.scrollIntoView({ behavior: "smooth" })
    })
}
scrollInto('.intro', '.headIntro');
scrollInto('.propos', '.headPropos');
scrollInto('.stack', '.headStack');
scrollInto('.portf', '.headPortf');
scrollInto('.copyright', '.headContact');

function boxProjet(divProjet, textProjet) {
    const proj1 = document.querySelector(divProjet);
    proj1.addEventListener('click', (e) => {
        e.stopPropagation()
        let box = document.querySelector('.boxProj1')
        let overlay = document.querySelector('.overlay');
        if (!box) {
            box = document.createElement('div');
            box.className = 'boxProj1';
            document.querySelector('.portf').appendChild(box);
            box.innerHTML = textProjet
    
            overlay = document.createElement('div');
            overlay.className = 'overlay';
            document.body.appendChild(overlay);
        }
    })
    
    document.querySelector('body').addEventListener('click', () => {
        if (document.querySelector('.boxProj1')) {
            document.querySelector('.boxProj1').remove();
            document.querySelector('.overlay').remove();
        }
    })
}

boxProjet(".proj1", "Projet qui a été créé durant la Nurserie. <br> C'était autour d'un thème d'un voyage en 80 jours et il a été fait avec Html et Css. <br> Nous étions 4 à bosser dessus.")
boxProjet(".proj2", "Vous êtes actuellement sur la deuxième version de mon portfolio. <br> La première version a été faite durant ma formation. <br> Elle était faite uniquement en Html/Css.")
boxProjet(".proj3", "Projet de site pour s'inscrire à un tournoi Magic the Gathering. <br> Le but était de retravailler le back-end en faisant un CRUD et créer une base de donnée sur laquelle intéragir. <br> Le site est fait uniquement en PHP.")
boxProjet(".proj4", "Projet de site autour de l'univers de Destiny 2. <br> Ce site avait pour projet d'aider mon clan in-game afin qu'ils y retrouvent toutes les infos concernant le jeu, les prochains raid organisés ainsi que la possibilité de créer des builds directement sur le site et de les partager. La partie création de build n'est pas encore au point. <br> Le site a été fait avec Angular.")