import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

export function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Form />
				<List />
			</div>
		</>
	);
}
