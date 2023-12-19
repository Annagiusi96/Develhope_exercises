// Lo scope di questo task è di salvare tutti i dati di un form nel session storage.
//  -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome 
//  -Fai in modo che questi dati si salvino nel session storage

const titleName = document.querySelector('.title-name');
const email = document.querySelector('.email');
const name = document.querySelector('.firstname');
const surname = document.querySelector('.lastname');
const btn = document.querySelector('.btn')
const clear = document.querySelector('.clear')

function submit(){
    let valueName = name.value;
    titleName.innerText = valueName;

    let valueEmail = email.value;
    let valueSurname = surname.value;
    
    sessionStorage.setItem('name',valueName)
    sessionStorage.setItem('surname',valueSurname)
    sessionStorage.setItem('email',valueEmail)
}

btn.addEventListener('click', submit)

const savedName = sessionStorage.getItem('name')
if(savedName){
    titleName.innerText = savedName
}

clear.addEventListener('click', ()=>{
    sessionStorage.clear()
})
