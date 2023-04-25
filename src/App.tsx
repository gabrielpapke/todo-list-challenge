import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { TaskType } from "./components/Item/Item";
import { useState } from "react";

const tasksInitial: TaskType[] = [
	{
		id: 1,
		title: "Uma tarefa teste",
		done: false,
	},
	{
		id: 2,
		title: "Segunda tarefa teste",
		done: false,
	},
];

export function App() {
	const [tasks, setTasks] = useState(tasksInitial);

	function checkTask(task: TaskType) {
		const tasksWithNewStatus = tasks.map((item) => {
			if (item.id === task.id) item.done = !item.done;

			return item;
		});

		setTasks(tasksWithNewStatus);
	}

	function deleteTask(task: TaskType) {
		const tasksWithoutDeletedOne = tasks.filter((item) => item.id !== task.id);

		setTasks(tasksWithoutDeletedOne);
	}

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Form />
				<List tasks={tasks} onCheckTask={checkTask} onDeleteTask={deleteTask} />
			</div>
		</>
	);
}
