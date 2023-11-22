// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
 
  //FOREACH
  function printNameStudents(arr){
    arr.forEach(element => {
        console.log(element.nome);
    });
  }
  printNameStudents(studenti)

 //FIND
  function findStudent(arr){
    const student = arr.find(student => student.voto > 90);
    return student;
  }
  const student = findStudent(studenti);
  console.log(student);

  //REDUCE
  function votoMedio(arr){
    const sum = arr.reduce((a,student)=> a + student.voto, 0);
    return sum / arr.length;
  }
  const media = votoMedio(studenti);
  console.log(media);

  //MAP
  function upperCaseName(arr){
    const studentsUpperCase = arr.map(student => student.nome.toUpperCase())
    return studentsUpperCase;
  }
  const listNameUpperCase = upperCaseName(studenti);
  console.log(listNameUpperCase);

  //FILTER
  function filterStudents(arr){
    const studentsVoting = arr.filter(student => student.voto > 85);
    return studentsVoting;
  }
  const votoMaggiore85 = filterStudents(studenti);
  console.log(votoMaggiore85);

