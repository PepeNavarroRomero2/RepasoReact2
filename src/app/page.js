"use client"
import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "./StudentList";
import LimitedCounter from "./LimitedCounter";
import AverageCalculator from "./AverageCalculator";
import SurveySimulator from "./SurveySimulator";
import ShoppingList from "./ShoppingList";
import LoginForm from "./LoginForm";
import App from "./App";
import MultiCounter from "./MultiCounter";
import UserTable from "./UserTable";
import GuessTheNumber from "./GuessTheNumber";
import ThemeSelector from "./ThemeSelector";
import LiveValidationForm from "./LiveValidationForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ejercicio 1: StudentList</h1>
      <StudentList/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 2: LimitedCounter</h1>
      <LimitedCounter/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 3: AverageCalculator</h1>
      <AverageCalculator/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 4: SurveySimulator</h1>
      <SurveySimulator/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 5: ShoppingList</h1>
      <ShoppingList />
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 6: Control de acceso</h1>
      <LoginForm/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 7: Galería básica de imágenes</h1>
      <App/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 8: Contador con múltiples instancias</h1>
      <MultiCounter/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 9: Tabla dinámica de usuarios</h1>
      <UserTable/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 10: Juego de adivinar un número</h1>
      <GuessTheNumber/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 11: Contador con formato de tiempo</h1>
      <p>No se hace</p>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 12: Selector de temas de colores</h1>
      <ThemeSelector/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 13: Formulario con validación en vivo</h1>
      <LiveValidationForm/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
