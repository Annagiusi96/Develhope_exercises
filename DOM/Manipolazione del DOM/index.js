const input = document.querySelector('input')
const ul = document.querySelector('ul')
const alert = document.querySelector('p')
const reset = document.querySelector('.reset')

const addProduct = () => {
  const value = input.value
  const container = document.createElement('span')
  const li = document.createElement('li')

  if(input.value != ""){
    li.innerText = value
    input.value = ""

    const check = document.createElement('input')
    check.setAttribute('type','checkbox')

    li.classList.add('to-do-list')
    container.classList.add('container')
    
    container.append(li,check)
    ul.append(container)
    alert.innerText = ""
  }else{
    alert.innerText = "Add a todo"
  }
};

reset.addEventListener('click',()=>{
  ul.innerHTML = ""
  alert.innerText= ""
})
