const firstName = document.getElementById('firstName')
const surname = document.getElementById('lastName')
const age = document.getElementById('age')

const person = {
    name: firstName.value,
    surname: surname.value,
    age: age.value
}

const form = document.querySelector('form')
form.setAttribute('data-person', JSON.stringify(person))