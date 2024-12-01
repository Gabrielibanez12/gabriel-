
const body = document.body;

// ALERTSECTION CONTACT
const formContact = document.querySelector('.form-message');
formContact.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');

    if (inputName.value == '' || inputEmail.value == '' || inputMessage.value == '') {
        Swal.fire({
            icon: "error",
            title: "Form Validation",
            text: "Please fill in the form correctly"
        });
    }
    else {
        Swal.fire({
            title: "Thank you! your message has been sent",
            color: 'black'
        });
        inputName.value = '';
        inputEmail.value = '';
        inputMessage.value = '';
    }
})

AOS.init({
    once: false
})













