import { defaultHead } from "next/head";
import { useState } from "react";

export default function GuessTheNumber(){
    const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const[guess, setGuess]=useState(0)
    const[acertado, setAcertado]=useState("")

    const handleGuess = ()=>{
        if(guess==targetNumber){
            setAcertado("Acertaste!")
        }else{
            setAcertado("No")
        }
    }
    return(
        <>
            <p>Dime que numero crees que es: </p>
            <input type="number" placeholder="1 - 100" onChange={(e)=>{
                setGuess(e.target.value)
            }}/>
            <button onClick={handleGuess}>Adivina!</button>
            <p>{acertado}</p>
        </>
    )
}