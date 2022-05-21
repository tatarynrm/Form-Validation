let form = document.forms['form1'];
let done = document.querySelectorAll('.fa-check');
let unDone = document.querySelectorAll('.fa-times');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let emailForm = document.getElementById('email');
let phoneForm = document.getElementById('phone');
let passForm = document.getElementById('pass');
let btnForm = document.getElementById('signUp');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkInputs() {
    const usernameValue = firstName.value.trim();
    const userlastnameValue = lastName.value.trim();
    const emailValue = emailForm.value.trim();
    const phoneValue = phoneForm.value.trim();
    const passValue = passForm.value.trim();


    if (usernameValue === '') {

        showError(firstName, "Please provide a valid Name");

    } else {
        showDone(firstName);
    }

    if (userlastnameValue === '') {
        showError(lastName, "Please provide a valid Last Name");
    } else {
        showDone(lastName);
    }

    if (emailValue === '') {
        showError(emailForm, "Please provide a valid email adress");
    } else if (!isEmail(emailValue)) {
        showError(emailForm, "Email is not correct")
    } else {
        showDone(emailForm);
    }
    if (phoneValue === '') {
        showError(phoneForm, "Please provide a valid phone number")
    } else {
        showDone(phoneForm);
    }

    if (passValue === '') {
        showError(passForm, 'Please provide a valid password')
    } else if (passValue.length < 7) {
        showError(passForm, 'At least 7 symbols')
    } else {
        showDone(passForm)
    }

}




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showDone(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group complete';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом data-mask="phone"
    if (!elements) return // если таких нет, прекращаем выполнение функции
    const phoneOptions = { // создаем объект параметров
        mask: '+{380}(00)000-00-00' // задаем единственный параметр mask
    }
    elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
        IMask(el, phoneOptions) // инициализируем плагин с установленными выше параметрами
    })

})

var str1 = "Apple, Banana, Kiwi";

var res1 = str1.slice(7, 13);
var res2 = str1.slice(-12, -6);
var res3 = str1.slice(7);
var res4 = str1.slice(-12);
var res5 = str1.substring(7, 13); //substring() cannot accept negative indexes like slice.
var res6 = str1.substr(7, 9);

console.log(res2);