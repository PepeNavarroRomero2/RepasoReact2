import React from "react";
import { useState } from "react";

export default function SurveySimulator(){
    const [si, setSi]=useState(0)
    const [no, setNo]=useState(0)
    const [talVez, setTalVez]=useState(0)

    return (
        <>
            <h4>Contador de Votos</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p>Si : {si} --- </p>
                <p>No : {no} --- </p>
                <p>Tal vez : {talVez}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={()=>{
                    setSi(si+1)
                }}>SI</button>
                <button onClick={()=>{
                    setNo(no+1)
                }}>NO</button>
                <button onClick={()=>{
                    setTalVez(talVez+1)
                }}>TAL VEZ</button>
            </div>
        </>
    );
}