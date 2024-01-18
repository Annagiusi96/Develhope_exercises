// export function Age({age}){
//     return <p>Your age is {age}</p>
// }

//CONDITIONAL RENDERING-2
export function Age({ age }) {
    return <div>
        {age > 18 ? <p>Your age is {age}</p> : <p>You are very young</p>}
    </div>
}
