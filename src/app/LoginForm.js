import React, { useState } from "react";

export default function LoginForm() {
    const [messageBack, setMessageBack] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const datosSimulados = [
        { name: "paco", pass: "paco" },
        { name: "paco1", pass: "paco1" },
        { name: "paco2", pass: "paco2" }
    ];
    const handleLogIn = () => {
        const foundUser = datosSimulados.find((index) => index.name === user && index.pass === pass);

        if (foundUser) {
            setMessageBack("Datos Correctos");
        } else {
            setMessageBack("Datos Incorrectos");
        }
    };

    return (
        <>
            <input
                placeholder="User"
                onChange={(e) => setUser(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={handleLogIn}>LogIn</button>
            <p>{messageBack}</p>
        </>
    );
}
