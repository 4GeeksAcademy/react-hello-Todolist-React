import React, { useState } from 'react';
import '../../styles/index.css'; // Estilos CSS

const Home = () => {
	const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
	const [inputValue, setInputValue] = useState(''); // Estado para almacenar el valor del input
  
	// Función para manejar el cambio en el input
	const handleInputChange = (e) => {
	  setInputValue(e.target.value);
	};
  
	// Función para manejar el envío del formulario (agregar tarea)
	const handleSubmit = (e) => {
	  e.preventDefault(); // Evitar el comportamiento por defecto del formulario
	  if (inputValue.trim() !== '') {
		// Verificar que el input no esté vacío
		setTasks([...tasks, inputValue.trim()]); // Agregar la tarea al estado de tareas
		setInputValue(''); // Limpiar el valor del input
	  }
	};
  
	// Función para eliminar una tarea
	const handleDeleteTask = (index) => {
	  const updatedTasks = tasks.filter((_, i) => i !== index); // Filtrar las tareas excepto la que se quiere eliminar
	  setTasks(updatedTasks); // Actualizar el estado de las tareas
	};
  
	// Mensaje de "tarea(s) restante(s)"
	const remainingTasksMessage = tasks.length === 1 ? '1 tarea restante' : `${tasks.length} tareas restantes`;
  
	return (
	  <div className="container">
		<h1>Tareas </h1> 
		<form onSubmit={handleSubmit}>
		  <input
			type="text"
			value={inputValue}
			onChange={handleInputChange}
			placeholder="Añadir tarea..."
		  />
		  <button type="submit">Añadir</button>
		</form>
		{tasks.length > 0 && (
		  <ul>
			{tasks.map((task, index) => (
			  <li key={index}>
				<span>{task}</span>
				<button onClick={() => handleDeleteTask(index)}>Eliminar</button>
			  </li>
			))}
		  </ul>
		)}
		<p>{remainingTasksMessage}</p> {/* Mostrar el mensaje de tareas restantes */}
	  </div>
	);
  };
  
  export default Home;
  
