import { useState } from "react";

export default function Form() {
	let [formData, setFormData] = useState({
		fullName: "",
		userName: "",
	});

	let handleFormData = (event) => {
		let fieldName = event.target.name;
		let fieldValue = event.target.value;
		setFormData(fieldValue);

		setFormData((currData) => {
			currData[fieldName] = fieldValue;
			return { ...currData };
		});
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			fullName: "",
			userName: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="fullName">Full Name</label>
			<br />
			<input
				placeholder="Enter your full name: "
				type="text"
				value={formData.fullName}
				name="fullName"
				onChange={handleFormData}
			/>
			<br />
			<br />
			<br />
			<label htmlFor="fullName">User Name</label>
			<br />
			<input
				placeholder="Enter your user name: "
				type="text"
				value={formData.userName}
				name="userName"
				onChange={handleFormData}
			/>
			<br />
			<br />
			<br />
			<button>Submit</button>
		</form>
	);
}
