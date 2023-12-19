// Lo scope di questo task è di salvare tutti i dati di un form nel local storage.
//  -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome 
//  -Fai in modo che questi dati si salvino nel local storage 
//  -Controlla che al reload il nome nel titolo non scompaia


const btn = document.querySelector('.btn')

const titleName = document.querySelector('.title-name');
const firstName = document.querySelector('.firstname');
const email = document.querySelector('.email')
const surname = document.querySelector('.lastname')
const clear = document.querySelector('.clear')

function submit(){
 let valueName = firstName.value;
 titleName.innerText = valueName

 let valueEmail = email.value
 let valueSurname = surname.value
 
 localStorage.setItem('name',valueName)
 localStorage.setItem('email', valueEmail)
 localStorage.setItem('surname', valueSurname)

 console.log(valueName,valueEmail,valueSurname);
}

btn.addEventListener('click', submit)

const savedUsername = localStorage.getItem('name') 
if(savedUsername){
    titleName.innerText = savedUsername
}

clear.addEventListener('click', ()=>{
    localStorage.clear()
})
