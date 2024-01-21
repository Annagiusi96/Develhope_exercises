export function MouseClicker(){
    function handleReadButton(e){
        console.log(e.target.name);
    }
    return <button name="one" onClick={handleReadButton}>Click me</button>
}