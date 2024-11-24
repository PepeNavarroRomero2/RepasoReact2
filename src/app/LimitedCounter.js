import React from "react";
import { useState } from "react";

export default function LimitedCounter(){
    const [maxValue, setMaxValue] = useState(0);
    const [actualValue, setactualValue] =useState(0);
    return(
        <>
            <input placeholder="Establezca el valor maximo" onChange={(c) => {
                setMaxValue(Number(c.target.value))
            }}></input>
            <p>Valor Maximo: {maxValue}</p>
            <p>Contador: {actualValue}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={()=>{
                    if(actualValue<maxValue){
                        setactualValue(actualValue+1)
                    }
                }}
                style={{
                    backgroundColor: "#ff6347",  // Fondo color tomate (resalta en fondo negro)
                    color: "white",              // Texto blanco
                    border: "2px solid white",   // Borde blanco para resaltar
                    padding: "10px 20px",        // Espaciado del botón
                    fontSize: "16px",            // Tamaño del texto
                    fontWeight: "bold",          // Texto en negrita
                    borderRadius: "5px",         // Bordes redondeados
                    cursor: "pointer",          // Cambia el cursor al pasar sobre el botón
                    transition: "background-color 0.3s, border-color 0.3s", // Transición suave
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ff4500"; // Cambia a un color más oscuro al pasar el mouse
                    e.target.style.borderColor = "#ff4500"; // Borde también cambia
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ff6347"; // Vuelve al color original cuando el mouse sale
                    e.target.style.borderColor = "white"; // Vuelve al borde blanco
                }}>Incrementar</button>
                <button 
                style={{
                    backgroundColor: "#ff6347",  // Fondo color tomate (resalta en fondo negro)
                    color: "white",              // Texto blanco
                    border: "2px solid white",   // Borde blanco para resaltar
                    padding: "10px 20px",        // Espaciado del botón
                    fontSize: "16px",            // Tamaño del texto
                    fontWeight: "bold",          // Texto en negrita
                    borderRadius: "5px",         // Bordes redondeados
                    cursor: "pointer",          // Cambia el cursor al pasar sobre el botón
                    transition: "background-color 0.3s, border-color 0.3s", // Transición suave
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ff4500"; // Cambia a un color más oscuro al pasar el mouse
                    e.target.style.borderColor = "#ff4500"; // Borde también cambia
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ff6347"; // Vuelve al color original cuando el mouse sale
                    e.target.style.borderColor = "white"; // Vuelve al borde blanco
                }}
                onClick={()=>{
                    setactualValue(actualValue-1)
                }}>Disminuir</button>
            </div>
            <button  onClick={()=>{
                setactualValue(0);
            }}
            style={{
                backgroundColor: "#ff6347",  // Fondo color tomate (resalta en fondo negro)
                color: "white",              // Texto blanco
                border: "2px solid white",   // Borde blanco para resaltar
                padding: "10px 20px",        // Espaciado del botón
                fontSize: "16px",            // Tamaño del texto
                fontWeight: "bold",          // Texto en negrita
                borderRadius: "5px",         // Bordes redondeados
                cursor: "pointer",          // Cambia el cursor al pasar sobre el botón
                transition: "background-color 0.3s, border-color 0.3s", // Transición suave
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ff4500"; // Cambia a un color más oscuro al pasar el mouse
                e.target.style.borderColor = "#ff4500"; // Borde también cambia
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ff6347"; // Vuelve al color original cuando el mouse sale
                e.target.style.borderColor = "white"; // Vuelve al borde blanco
            }}
            >Reiniciar</button>
        </>
    );
}