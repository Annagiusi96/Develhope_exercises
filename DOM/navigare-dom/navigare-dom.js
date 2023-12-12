const html = document.documentElement
       const body = html.children[1]
       const ul = body.children[0]
       const secondLi = ul.children[1]
       const third = secondLi.nextElementSibling.innerText //per navigare all'elemento fratello successivo a secondLi e vederne il contenuto
       const first = secondLi.previousElementSibling.innerText //per navigare all'elemento fratello precedente a secondLi e vederne il contenuto
      
       console.log(ul);
       console.log(secondLi);
       console.log(third);
       console.log(first);