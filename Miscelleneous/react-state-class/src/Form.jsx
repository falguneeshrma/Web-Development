import { useState } from "react";

export default function Form() {
	// let [fullName, setFullName] = useState("");
	// let [username, setUsername] = useState("");

	let [formData, setFormData] = useState({
		fullName: "",
		username: "",
		password: "",
	});

	// let handleNameChange = (event) => {
	// 	setFullName(event.target.value);
	// };
	// let handleUserName = (event) => {
	// 	setUsername(event.target.value);
	// };
	function handleInputChange(event) {
		setFormData((currData) => {
			return {
				...currData,
				[{
					fullName: "",
					username: "",
				}]: event.target.value,
			};
		});
	}
	let handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			fullName: "",
			username: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="fullName">Full Name</label>
			&nbsp;&nbsp;&nbsp;
			<input
				placeholder="Enter your full name"
				type="text"
				value={formData.fullName}
				onChange={handleInputChange}
				id="fullName"
				name="fullName"></input>
			<br />
			<br />
			<label htmlFor="username">Username</label>
			&nbsp;&nbsp;&nbsp;
			<input
				placeholder="Enter your user name"
				type="text"
				value={formData.username}
				onChange={handleInputChange}
				id="username"
				name="username"></input>
			<br />
			<br />
			<br />
			<br />
			<label htmlFor="password">Password</label>
			&nbsp;&nbsp;&nbsp;
			<input
				placeholder="Enter your password"
				type="text"
				value={formData.password}
				onChange={handleInputChange}
				id="password"
				name="password"></input>
			<br />
			<br />
			<button>Submit</button>
		</form>
	);
}
