import { useState } from "react";

export default function LiveValidationForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nombreValido, setNombreValido] = useState(null);
  const [emailValido, setEmailValido] = useState(null);
  const [passwordValido, setPasswordValido] = useState(null);

  const validarNombre = (valor) => valor.length >= 3;
  const validarEmail = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  const validarPassword = (valor) => valor.length >= 6;

  return (
    <div>
      <h2>Formulario de Validación</h2>
      <form>
        {/* Campo Nombre */}
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setNombreValido(validarNombre(e.target.value));
            }}
          />
          {nombreValido === false && <p style={{ color: "red" }}>Mínimo 3 caracteres.</p>}
          {nombreValido === true && <p style={{ color: "green" }}>Nombre válido.</p>}
        </div>

        {/* Campo Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailValido(validarEmail(e.target.value));
            }}
          />
          {emailValido === false && <p style={{ color: "red" }}>Email no válido.</p>}
          {emailValido === true && <p style={{ color: "green" }}>Email válido.</p>}
        </div>

        {/* Campo Contraseña */}
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordValido(validarPassword(e.target.value));
            }}
          />
          {passwordValido === false && <p style={{ color: "red" }}>Mínimo 6 caracteres.</p>}
          {passwordValido === true && <p style={{ color: "green" }}>Contraseña válida.</p>}
        </div>

        <button
          type="submit"
          disabled={!(nombreValido && emailValido && passwordValido)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
