import { Item } from "../Item/Item";
import styles from "./List.module.css";

export function List() {
	return (
		<div className={styles.list}>
			List
			<Item />
			<Item />
			<Item />
		</div>
	);
}
