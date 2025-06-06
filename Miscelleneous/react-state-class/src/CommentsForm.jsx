import { useState } from "react";

export default function CommentsForm() {
	let [formData, setFormData] = useState({
		username: "",
		remarks: "",
		rating: 5,
	});
	return (
		<div>
			<h4>Give a comment: </h4>
			<form>
				<input placeholder="Username" type="text" value={formData.username} />
				<br />
				<br />
				<br />
				<br />
				<textarea placeholder="Remarks" value={formData.remarks}></textarea>
				<br />
				<br />
				<br />
				<br />
				<input
					placeholder="Rating"
					type="number"
					min={0}
					max={5}
					value={formData.rating}
				/>
			</form>
		</div>
	);
}
