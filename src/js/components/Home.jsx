import React from "react";
import TodoList from "./TodoList";


//create your first component
function Home() {
	return (
		<div className="p-8 min-h-screen bg-gray-100">
			<h1 className="text-2xl font-bold text-center mb-6">Mi Lista de Tareas</h1>
			<TodoList />
		</div>
	);
}

export default Home;