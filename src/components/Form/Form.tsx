import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { TaskType } from "../Item/Item";
import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface FormProps {
	onCreateTask(task: TaskType): void;
}

export function Form({ onCreateTask }: FormProps) {
	const [taskTitle, setTaskTitle] = useState("");

	function handleTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");

		setTaskTitle(event.target.value);
	}

	function handleTaskTitleInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity("Esse campo é obrigatório!");
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		onCreateTask({
			title: taskTitle,
			done: false,
		});

		setTaskTitle("");
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				value={taskTitle}
				onInvalid={handleTaskTitleInvalid}
				required
				onChange={handleTaskTitleChange}
				placeholder="Adicione uma nova tarefa"
				type="text"
			/>

			<button type="submit">
				Criar
				<PlusCircle size={20} />
			</button>
		</form>
	);
}
