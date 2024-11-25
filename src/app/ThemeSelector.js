import { useState } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("claro");

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const themeStyles = {
    claro: {
      backgroundColor: "#f5f5f5",
      color: "#000",
    },
    oscuro: {
      backgroundColor: "#2d2d2d",
      color: "#fff",
    },
    colorido: {
      backgroundColor: "#ffdd57",
      color: "#ff007f",
    },
  };

  const handleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div style={themeStyles[theme]}>
      <p>Hermano dime que tema quieres</p>
      <div style={imageContainerStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png"
          alt="Tema Claro"
          style={imageStyle}
          onClick={() => handleTheme("claro")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5064/5064965.png"
          alt="Tema Oscuro"
          style={imageStyle}
          onClick={() => handleTheme("oscuro")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5084/5084268.png"
          alt="Tema Colorido"
          style={imageStyle}
          onClick={() => handleTheme("colorido")}
        />
      </div>
    </div>
  );
}
