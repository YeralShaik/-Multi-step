document.addEventListener('DOMContentLoaded', function () {

const topicSection = document.getElementById('choose-Topic');
const registerSection = document.getElementById('register-container');
const buttonRegister = document.getElementById('button');
const progress = document.getElementById('progress')

buttonRegister.addEventListener('click', () => {
    chooseTopic()
})

progress.addEventListener('click', () =>{
    home()
 
})

function home () {
    console.log('home')
    registerSection.classList.remove('inactive');

    chooseTopic()
}



function userRegister() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    console.log('nombre:', nombre);

    chooseTopic()
}

function chooseTopic() {
    console.log('topic');

    registerSection.classList.add('inactive');
    topicSection.classList.remove('inactive');

    userRegister()
}


function navigation() {
    console.log({ location });

    if (location.hash.startsWith('#topic')) {
        chooseTopic();
    } else {
        userRegister();
    }
}



window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);
})