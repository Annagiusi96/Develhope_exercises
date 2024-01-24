export function UncontrolledFormEs2(){
    function handleUserData(e){
        e.preventDefault();
        
        const formData = new FormData(e.target)
        //usare formData può essere utile perchè a volte la sintassi scritta nell'esercizio precedente per 
        //trivare i values, non è supportata da tutti i browser
        //per moduli più semplici senza caricamento di file o contenuto dinamico, 
        //l'uso di formData però potrebbe aggiungere complessità non necessarie

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            checkbox: formData.get('checkbox') === 'on' ? true : false
        }
        console.log(data);
    }
    return (
        <form onSubmit={handleUserData}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="checkbox" name="checkbox" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}