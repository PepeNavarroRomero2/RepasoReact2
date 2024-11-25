import React, { useState } from "react";

function Contador() {
    const [cont, setCont] = useState(0);

    return (
        <div>
            <p>{cont}</p>
            <div>
                <button onClick={() => setCont(prev => prev + 1)}>+</button>
                <button onClick={() => setCont(prev => prev - 1)}>-</button>
            </div>
        </div>
    );
}

export default function MultiCounter() {
    const [contadores, setContadores] = useState([]);

    const agregarContador = () => {
        setContadores([...contadores, <Contador key={contadores.length} />]);
    };

    return (
        <div>
            {contadores}
            <button onClick={agregarContador}>Añadir</button>
        </div>
    );
}
