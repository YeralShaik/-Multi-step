document.addEventListener('DOMContentLoaded', function () {
    const registerSection = document.getElementById('register-container');
    const topicSection = document.getElementById('choose-Topic');
    const buttonRegister = document.getElementById('button-register');
    const progress = document.getElementById('progress');
    const summarySection = document.getElementById('summary-container');
    const topicBtn = document.getElementById('topic-btn');
    const softwareInput = document.getElementById('software-Input');
    const userExperienceInput = document.getElementById('User-Experience-Input');
    const graphicInput = document.getElementById('graphic-Input');

    // Navegación
    function chooseTopic() {
        console.log('topic');
        registerSection.classList.add('inactive');
        topicSection.classList.remove('inactive');
        summarySection.classList.add('inactive');
    }

    function summary() {
        console.log('summary');
        registerSection.classList.add('inactive');
        topicSection.classList.add('inactive');
        summarySection.classList.remove('inactive');
        userRegister();
    }

    function home() {
        console.log('home');
        registerSection.classList.remove('inactive');
        topicSection.classList.add('inactive');
        summarySection.classList.add('inactive');
    }

    function userRegister() {
        const inputName = document.getElementById('inputName');
        const inputEmail = document.getElementById('email');
    
        const name = inputName.value;
        const email = inputEmail.value;
    
        const summaryName = document.getElementById('summary-name');
        summaryName.textContent = 'Name: ' + name;
    
        const summaryEmail = document.getElementById('summary-email');
        summaryEmail.textContent = 'Email: ' + email;
    
        if (name === '' || email === '') {
            alert('Completa todos los campos para poder continuar.');
            return false; // Detenemos la ejecución si los campos no están completos.
        } else {
            
            return true; // Indicamos que los datos están completos.
        }
    }
    
    buttonRegister.addEventListener('click', () => {
        if (userRegister()) {
            chooseTopic(); 
        }
    });
    
    

    //Select topic / Summary 
    function selectTopic() {
        const summaryTopic = document.getElementById('summary-Topic');

        softwareInput.addEventListener('click', () => {
            summaryTopic.textContent = 'Software Development';
            markButtonAsSelected(softwareInput);
        });

        userExperienceInput.addEventListener('click', () => {
            summaryTopic.textContent = 'User Experience';
            markButtonAsSelected(userExperienceInput);
        });

        graphicInput.addEventListener('click', () => {
            summaryTopic.textContent = 'Graphic Design';
            markButtonAsSelected(graphicInput);
        });
    }

    // Marcar el botón como seleccionado
    function markButtonAsSelected(button) {
        // Desmarcar otros botones
        softwareInput.classList.remove('selected');
        userExperienceInput.classList.remove('selected');
        graphicInput.classList.remove('selected');

        // Marcar el botón actual
        button.classList.add('selected');
    }


    function navigation() {
        console.log({ location });

        if (location.hash.startsWith('#topic')) {
            chooseTopic();
        } else if (location.hash.startsWith('#summary')) {
            summary();
        } else {
            home();
        }
    }

    // botones

    topicBtn.addEventListener('click', summary);

    softwareInput.addEventListener('click', selectTopic);
    userExperienceInput.addEventListener('click', selectTopic);
    graphicInput.addEventListener('click', selectTopic);

//funcion para validad que todos los datos esten completos y continuar a escoger topic 





    window.addEventListener('DOMContentLoaded', navigation, false);
    window.addEventListener('hashchange', navigation, false);
});
