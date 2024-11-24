import React, { useState } from "react";

export default function ShoppingList() {
  const [inputText, setInputText] = useState(""); // Estado para el input
  const [list, setList] = useState([]); // Estado para la lista de elementos
  const [onEdit, setOnEdit] = useState(""); // Estado para editar el texto
  const [editIndex, setEditIndex] = useState(null); // Índice del item en edición

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // Función para agregar un item a la lista
  const handleAddItem = () => {
    if (inputText !== "") {
      setList([...list, inputText]);
      setInputText(""); // Limpiar el input
    }
  };

  // Función para eliminar un item de la lista
  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  // Función para habilitar la edición
  const handleEdit = (index) => {
    setOnEdit(list[index]);
    setEditIndex(index);
  };

  // Función para guardar el cambio al editar
  const handleSaveEdit = () => {
    const updatedList = [...list];
    updatedList[editIndex] = onEdit;
    setList(updatedList);
    setEditIndex(null);
    setOnEdit(""); // Limpiar el texto de edición
  };

  // Función para manejar el blur (cuando el input pierde el foco)
  const handleBlur = () => {
    if (editIndex !== null) {
      setEditIndex(null); // Cancelar la edición al perder el foco
    }
  };

  return (
    <div>
      {/* Input para agregar elementos */}
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddItem(); // Agregar item al presionar Enter
          }
        }}
      />
      <button onClick={handleAddItem}>Agregar</button>

      {/* Renderizar la lista de items */}
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {/* Si estamos editando este item, mostramos un input */}
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={onEdit}
                  onChange={(e) => setOnEdit(e.target.value)}
                  onBlur={handleBlur} // Al perder el foco, cancelamos la edición
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSaveEdit(); // Guardar la edición al presionar Enter
                    }
                  }}
                />
                <button onClick={handleSaveEdit}>Guardar</button>
              </>
            ) : (
              <>
                {name}{" "}
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
