import { useState } from "react";

// library imports
import { PlusIcon } from "@heroicons/react/24/solid";

export const EditForm = ({ addTask }) => {
	const [task, setTask] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div role="dialog">
			<form className="todo" onSubmit={handleFormSubmit}>
				<div className="wrapper">
					<input
						type="text"
						id="task"
						className="input"
						value={task}
						onInput={(e) => setTask(e.target.value)}
						required
						autoFocus
						maxLength={60}
						placeholder="Enter Task"
					/>
					<label htmlFor="task" className="label">
						Enter Task
					</label>
				</div>
				<button className="btn" aria-label="Add Task" type="submit">
					<PlusIcon />
				</button>
			</form>
		</div>
	);
};
