// Implementare la funzione firstUncompletedNote che, dato un array di note, 
// restituisce la prima nota non completata. Una nota viene considerata completata se tutti i todo presenti 
// hanno il flag done impostato a true.


const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

//Ciclo for:

function firstUncompletedNote(notes) {
  let uncomplete;
  let result;
   for(let i=0; i< notes.length; i++){
    if(uncomplete == undefined){
     uncomplete = notes[i].todos.find(element => element.done == false)
     result = notes[i];
    }
   }
  return result;
}

//Ho provato a farlo anche col ciclo while:

function firstUncompletedNote2(notes){
  let uncomplete;
  let i = 0;
  let noteUncomplete;
  while(uncomplete == undefined && i < notes.length){
    uncomplete = notes[i].todos.find(element => element.done == false)
    noteUncomplete = notes[i]
    i++;
  }
  return noteUncomplete
}


const noteInProgress = firstUncompletedNote(notes);
console.log('First note in progress: ', noteInProgress);

const noteInProgress2 = firstUncompletedNote2(notes);
console.log('First note in progress, esempio 2: ', noteInProgress);


console.log('All notes: ', notes); 


