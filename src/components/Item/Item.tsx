import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Item.module.css";

export interface TaskType {
	id?: number;
	done: boolean;
	title: string;
}

interface TaskProps {
	task: TaskType;
	onCheckTask(task: TaskType): void;
	onDeleteTask(task: TaskType): void;
}

export function Item({ task, onCheckTask, onDeleteTask }: TaskProps) {
	function handleCheckTask(task: TaskType) {
		onCheckTask(task);
	}

	function handleDeleteTask(task: TaskType) {
		onDeleteTask(task);
	}

	return (
		<div className={`${styles.item} ${task.done ? styles.itemDone : ""}`}>
			<span className={styles.checkIcon} onClick={() => handleCheckTask(task)}>
				{task.done && (
					<span className={styles.checked}>
						<Check size={12} weight="bold" className="checked" />
					</span>
				)}

				{!task.done && <span className={styles.unchecked}></span>}
			</span>

			<span className={styles.title}>{task.title}</span>

			<span
				className={styles.removeIcon}
				onClick={() => handleDeleteTask(task)}
			>
				<Trash size={20} />
			</span>
		</div>
	);
}
