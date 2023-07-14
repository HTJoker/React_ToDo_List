import styles from "./TaskItem.module.css";

import { CheckIcon } from "@heroicons/react/24/outline";

export const TaskItem = ({ task }) => {
	return (
		<li className={styles.task}>
			<div className={styles["task-group"]}>
				<input
					type="checkbox"
          className={styles.checkbox}
					// onChange={}
					checked={task.checked}
					name={task.name}
					id={task.id}
				/>
				<label htmlFor={task.id} className={styles.label}></label>
				{task.name}
				<p className={styles.checkmark}>
					<CheckIcon strokeWidth={2} width={24} height={24} />
				</p>
			</div>
		</li>
	);
};
