const button = document.querySelector('.btn')
const reset = document.querySelector('.reset')
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    h1.classList.add('theme')
})

reset.addEventListener('click', () => {
    h1.classList.remove('theme')
})