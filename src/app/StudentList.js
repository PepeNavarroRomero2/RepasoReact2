import React, { useState } from "react";

export default function StudentList() {
    const [hola, setHola] = useState("");
    const [student, setStudent] = useState([]);

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    placeholder="Hola"
                    value={hola}
                    onChange={(e) => setHola(e.target.value)} 
                />
                <button
                    onClick={() => {
                        if (hola.trim() !== "") {
                            setStudent([...student, hola]);
                            setHola("");
                        }
                    }}
                    style={{
                        backgroundColor: "#ff6347",  // Fondo color tomate (resalta en fondo negro)
                        color: "white",              // Texto blanco
                        border: "2px solid white",   // Borde blanco para resaltar
                        padding: "5px 10px",        // Espaciado del botón
                        fontSize: "10px",            // Tamaño del texto
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
                    }}>
                    Agregar
                </button>
            </div>

            <ul>
                {student.map((name, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <li>{name}</li>
                        <button
                            onClick={() => {
                                setStudent(student.filter((_, i) => i !== index));
                            }}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </ul>
        </>
    );
}
