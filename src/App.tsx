import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { TaskType } from "./components/Item/Item";
import { useState } from "react";

export function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [idCounter, setIdCounter] = useState(0);

	function createTask(task: TaskType) {
		setTasks([...tasks, task]);

		setIdCounter((state) => state + 1);
	}

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
				<Form onCreateTask={createTask} idCounter={idCounter} />
				<List tasks={tasks} onCheckTask={checkTask} onDeleteTask={deleteTask} />
			</div>
		</>
	);
}
