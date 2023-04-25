import { Item, TaskType } from "../Item/Item";

import styles from "./List.module.css";
import emptyIcon from "../../assets/empty.svg";

interface ListProps {
	tasks: TaskType[];
	onCheckTask(task: TaskType): void;
	onDeleteTask(task: TaskType): void;
}

export function List({ tasks, onCheckTask, onDeleteTask }: ListProps) {
	const hasTasks = tasks.length;
	const doneTaskCount = hasTasks && tasks.filter((task) => task.done).length;

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<span>
					Tarefas criadas
					<span className={styles.badge}>{tasks.length}</span>
				</span>

				<span>
					Concluídas
					<span className={styles.badge}>
						{hasTasks ? `${doneTaskCount} de ${tasks.length}` : "0"}
					</span>
				</span>
			</div>

			{!hasTasks ? (
				<div className={styles.empty}>
					<img src={emptyIcon} className={styles.emptyIcon} />

					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						Crie tarefas e organize seus itens a fazer
					</p>
				</div>
			) : (
				<div>
					{tasks.map((task) => (
						<Item
							key={task.id}
							task={task}
							onCheckTask={onCheckTask}
							onDeleteTask={onDeleteTask}
						/>
					))}
				</div>
			)}
		</div>
	);
}
