import { Item } from "../Item/Item";

import styles from "./List.module.css";
import emptyIcon from "../../assets/empty.svg";

export function List() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<span>
					Tarefas criadas
					<span className={styles.badge}>5</span>
				</span>

				<span>
					Concluídas
					<span className={styles.badge}>2 de 5</span>
				</span>
			</div>

			<div className={styles.empty}>
				<img src={emptyIcon} className={styles.emptyIcon} />

				<p>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					Crie tarefas e organize seus itens a fazer
				</p>
			</div>

			<div>
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	);
}
