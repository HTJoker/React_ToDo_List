import { TaskItem } from "./TaskItem";
import styles from "../styles/TaskList.module.css";

export const TaskList = ({ tasks, deleteTask, toggleTask }) => {
	return (
		<ul className={styles.tasks}>
			{tasks
				.sort((a, b) => b.id - a.id)
				.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
					/>
				))}
		</ul>
	);
};
