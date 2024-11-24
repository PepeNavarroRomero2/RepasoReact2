import React, { useState } from "react";

export default function AverageCalculator() {
    const [nota, setNota] = useState(0);
    const [listaNotas, setListaNotas] = useState([])
    const [promedio, setPromedio] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && nota !== "") {
            setListaNotas([...listaNotas, parseFloat(nota)]);
            setNota("");
        }
    };

    const calcularPromedio = () => {
        if (listaNotas.length === 0) return;
        const sumaNotas = listaNotas.reduce((acc, curr) => acc + curr, 0);
        setPromedio(sumaNotas / listaNotas.length);
    };

    return (
        <>
            <input
                placeholder="Ingresa una nota"
                value={nota} 
                onChange={(e) => setNota(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={calcularPromedio} 
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
                }}>Calcular Promedio</button>

            <div>
                <h3>Notas: {listaNotas.join(", ")}</h3>
                {promedio !== null && <h3>Promedio: {promedio.toFixed(2)}</h3>}
            </div>
        </>
    );
}
