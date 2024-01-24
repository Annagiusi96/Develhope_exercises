export function UncontrolledFormEs1() {
    function handleUserData(e){
        e.preventDefault();
        const data = {
            username: e.target.elements.namedItem('username').value,
            password: e.target.elements.namedItem('password').value,
            checkbox: e.target.elements.namedItem('checkbox').checked
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