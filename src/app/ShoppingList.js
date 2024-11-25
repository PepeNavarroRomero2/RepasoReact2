import React, { useState } from "react";

export default function ShoppingList() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [onEdit, setOnEdit] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleAddItem = () => {
    if (inputText !== "") {
      setList([...list, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  const handleEdit = (index) => {
    setOnEdit(list[index]);
    setEditIndex(index);
  };
  const handleSaveEdit = () => {
    const updatedList = [...list];
    updatedList[editIndex] = onEdit;
    setList(updatedList);
    setEditIndex(null);
    setOnEdit("");
  };
  const handleBlur = () => {
    if (editIndex !== null) {
      setEditIndex(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddItem();
          }
        }}
      />
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={onEdit}
                  onChange={(e) => setOnEdit(e.target.value)}
                  onBlur={handleBlur}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSaveEdit();
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
