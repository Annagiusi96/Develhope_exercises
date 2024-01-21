// export function MouseClicker(){
//     function handleReadButton(e){
//         console.log(e.target.name);
//     }
//     return <button name="one" onClick={handleReadButton}>Click me</button>
// }


//HANDLING-EVENTS-2
export function MouseClicker() {
    function handleReadButton(e) {
        console.log(e.target);//viene stampato solo attributo src dell'img essendo l'elemento su cui faccio click
       
    }
    return (
        <button name="one" onClick={handleReadButton}>
            <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" width={50} />
            Click me
        </button>
    )
}