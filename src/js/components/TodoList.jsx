import { useState } from "react";

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const input = (e) => setNuevaTarea(e.target.value);

  const keyDown = (e) => {
    if (e.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea.trim()])
      setNuevaTarea("")
    }
  }

  const click = (index) => {
    const newTareas = tareas.filter((tarea,i) => index != i)
    setTareas(newTareas)
  }

  return (

    <div>
      <input type="text" onChange={input} onKeyDown={keyDown} />
      <ul>
        {tareas.map((tarea, index) => {
          return (
            <li key={tarea}>
              {tarea}
              <button onClick={() => click(index)}>Borrar</button>
            </li>
          )
        })}
      </ul>
    </div>
  )




  // e.key === "Enter" && nuevaTarea.trim() !== ""
  //   ? (setTareas([...tareas, nuevaTarea.trim()]), setNuevaTarea(""))
  //   : null;



}

export default TodoList;