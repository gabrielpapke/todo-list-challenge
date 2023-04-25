import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Item.module.css";

export function Item() {
	return (
		<div className={`${styles.item} ${styles.itemDone}`}>
			<label className={styles.checkIcon}>
				<input type="checkbox" />

				<span className={styles.checked}>
					<Check size={12} weight="bold" className="checked" />
				</span>

				<span className={styles.unchecked}></span>
			</label>

			<span className={styles.title}>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</span>

			<span className={styles.removeIcon}>
				<Trash size={20} />
			</span>
		</div>
	);
}
