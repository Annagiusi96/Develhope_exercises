// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
// -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
// -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.


function fetchUserData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({ id: 1, name: 'John' })
    },1000)
  })
}


function fetchUserPosts(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(['Post 1', 'Post 2', 'Post 3'])
    },1500)
  })
}

fetchUserData()
.then((data)=>{
  console.log(data.name);
  return fetchUserPosts()})
.then((posts)=>{
  posts.forEach(post => console.log(post))})
.catch(e => console.log(e))