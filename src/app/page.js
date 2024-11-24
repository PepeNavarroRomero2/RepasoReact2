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
      <p>No se mu bien como hacerlo</p>
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
      <p>No se mu bien como hacerlo</p>
      <App/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
