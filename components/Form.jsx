export function Form (props) {
    return (
        <form action={props.func}>
            <label htmlFor="name">Name : </label>
            <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="Name"
            aria-label="Type Name"
            required/>
            <button> Submit</button>
        </form>
    )
}