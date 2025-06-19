import { useState } from "react";

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const input = (e) => setNuevaTarea(e.target.value);

  const keyDown = (e) => {
    if (e.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, { texto: nuevaTarea.trim(), completado: false }])
      setNuevaTarea("")
    }
  }

  const click = (index) => {
    // const newTareas = tareas.filter((tarea, i) => index != i)
    setTareas(tareas.filter((_, i) => index != i))
  }

  const finalizarClick = (index) => {
    setTareas(tareas.map((tarea, i) =>
      index == i ? { ...tarea, completado: true } : tarea
    ));
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
              <div key={index}>
                <li className="list-group-item d-flex justify-content-between">
                  {tarea.texto}
                  {!tarea.completado && <button className="btn btn-danger" onClick={() => click(index)}>Borrar</button>}

                  <button className="btn btn-success" onClick={() => finalizarClick(index)}>Finalizar</button>

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