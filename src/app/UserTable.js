import { useState } from "react";

export default function UserTable() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState(0);
    const [datos, setDatos] = useState([]);
    const [idCounter, setIdCounter] = useState(1);

    const handleAdd = () => {
        if (nombre && email && edad > 0) {
            setDatos(prevDatos => [
                ...prevDatos,
                { id: idCounter, nombre, email, edad }
            ]);
            setNombre("");
            setEmail("");
            setEdad(0);
            setIdCounter(prev => prev + 1);
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    };

    const handleDelete = (id) => {
        setDatos(prevDatos => prevDatos.filter(dato => dato.id !== id));
    };

    return (
        <>
            <p>Introduce un nombre, un email y una edad, en ese orden</p>
            <div>
                <input
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(Number(e.target.value))}
                />
            </div>
            <button onClick={handleAdd}>Añadir</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(dato => (
                        <tr key={dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.email}</td>
                            <td>{dato.edad}</td>
                            <td>
                                <button onClick={() => handleDelete(dato.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
