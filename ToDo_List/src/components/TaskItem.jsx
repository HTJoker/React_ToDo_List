import { useState } from "react";
import styles from "./TaskItem.module.css";

import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

export const TaskItem = ({ task }) => {
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckBox = (e) => {
		setIsChecked(!isChecked);
	};

	return (
		<li className={styles.task}>
			<div className={styles["task-group"]}>
				<input
					type="checkbox"
					className={styles.checkbox}
					checked={isChecked}
					onChange={handleCheckBox}
					name={task.name}
					id={task.id}
				/>
				<label htmlFor={task.id} className={styles.label}>
					{task.name}
					<p className={styles.checkmark}>
						<CheckIcon strokeWidth={2} width={2} height={24} />
					</p>
				</label>
			</div>
			<div className={styles["task-group"]}>
				<button
					className="btn"
					aria-label={`Update ${task.name} Task`}
					// onclick={}
				>
					<PencilIcon strokeWidth={2} width={2} height={24} />
				</button>
				<button
					className={`btn ${styles.delete}`}
					aria-label={`Delete ${task.name} Task`}
					// onClick={}
				>
					<TrashIcon strokeWidth={2} width={2} height={24} />
				</button>
			</div>
		</li>
	);
};
