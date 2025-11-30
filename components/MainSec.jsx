import { Form } from "./Form"
import { TriviaSec } from "../components/TriviaSec"

export function Main (props) {
    return (
        <>
            <main>
            <h1>
                Welcome to Trivia {(props.uName === "") ? "" : props.uName}!
            </h1>
                {(props.uName === "") ? <section>
                    <h5>Type your name to Proceed..</h5>
                    <Form func={props.formFunc}/>  

                </section> : 
                
                <TriviaSec data={props.triviaData}/>}
                
            </main>
        </>
    )
}