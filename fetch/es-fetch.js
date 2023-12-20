const title = document.querySelector('h2');
const img = document.querySelector('img')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const err = document.querySelector('.p')

async function fetchData(){
    try {
        const res = await fetch(`https://ringsdb.com/api/public/card/${input.value}`)
        const data = await res.json()
        
        title.innerText = data.name
        img.setAttribute('src',`https://ringsdb.com/${data.imagesrc}`)
        
        err.textContent = ''
    } catch (error) {
        const p = document.createElement('p')
        p.textContent = 'Codice errato'
        err.appendChild(p)
        title.innerText = ''
        img.removeAttribute('src')
    }
}

btn.addEventListener('click', fetchData)

