import Header from "../Header";
import Home from "../Home";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        <>
        <Header />
        
        <Home/>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					logout
				</button>
			</nav>
		</div>
        </>
	);
};

export default Main;