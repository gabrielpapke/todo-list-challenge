import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function Form() {
	return (
		<form className={styles.form}>
			<input placeholder="Adicione uma nova tarefa" type="text" />

			<button type="submit">
				Criar
				<PlusCircle size={20} />
			</button>
		</form>
	);
}
