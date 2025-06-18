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
    // const newTareas = tareas.filter((tarea, i) => index != i)
    setTareas(tareas.filter((_, i) => index != i))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <ul className="list-group col-6">
          <li className="list-group-item active">
            <input className="w-100" type="text" onChange={input} onKeyDown={keyDown} value={nuevaTarea} />
          </li>
          {tareas.map((tarea, index) => {
            return (
              <div>
                <li className="list-group-item d-flex justify-content-between" key={index}>
                  {tarea}

                  <button className="btn btn-danger" onClick={() => click(index)}>Borrar</button>
                </li>
              </div>
            )
          })}

          <li className="list-group-item">
            {`${tareas.length} item `}
          </li>

        </ul>
        <div className="col-3"></div>
      </div>

    </div>
  )

}

export default TodoList;