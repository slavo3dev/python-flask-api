import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [message, setMessage] = useState("");

	async function hanldeFetchData() {
		if (message) {
			setMessage("");
		} else {
			try {
				const response = await fetch("http://localhost:5000/test");
				const data = await response.json();

				if (!response.ok) {
					throw new Error(
						"Something went wrong or this packeg is not exits!!",
					);
				}

				await setMessage(data);
			} catch (error) {
				console.error(`Error Message: ${error.message}`);
			}
		}
	}

	console.log(message);
	return (
		<div className={styles.container}>
			<Head>
				<title>API - GitHub Account</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>API: Next & Flask</h1>
			<button onClick={hanldeFetchData}>Present Data</button>
			<p>
				{message ? message : "Press Button To recieve the message"}
			</p>
		</div>
	);
}
