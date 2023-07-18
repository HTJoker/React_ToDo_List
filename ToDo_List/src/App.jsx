import React, { useState } from "react";
import "./index.css";
import { CustomForm } from "./components/CustomForm";
import { EditForm } from "./components/EditForm";
import { TaskList } from "./components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks((prevState) => [...prevState, task]);
	};

	const deleteTask = (id) => {
		setTasks((prevState) => prevState.filter((t) => t.id !== id));
	};

	const toggleTask = (id) => {
		setTasks((prevState) =>
			prevState.map((task) => {
				task.id === id ? { ...task, checked: !task.checked } : task;
			})
		);
	};

	return (
		<div className="container">
			<header>
				<h1>My Task List</h1>
			</header>
			<EditForm />
			<CustomForm addTask={addTask} />
			{tasks && (
				<TaskList
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTask={toggleTask}
				/>
			)}
		</div>
	);
}

export default App;
