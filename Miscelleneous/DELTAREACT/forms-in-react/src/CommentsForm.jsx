import { useState } from "react";

export default function CommentsForm() {
	let [formData, setFormData] = useState({
		username: "",
		review: "",
		rating: 5,
	});

	let handleInputChange = (event) => {
		setFormData((currData) => {
			return { ...currData, [event.target.name]: event.target.value };
		});
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			username: "",
			review: "",
			rating: 5,
		});
	};

	return (
		<div>
			<h4>Leave a Review: </h4>

			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<br />

				<input
					placeholder="username"
					value={formData.username}
					onChange={handleInputChange}
				/>
				<br />
				<br />
				<label htmlFor="review">Review</label>
				<br />
				<textarea
					placeholder="Add a review..."
					name="username"
					value={formData.review}
					onChange={handleInputChange}></textarea>
				<br />
				<br />
				<label htmlFor="rating">Rating</label>
				<br />
				<input
					placeholder="rating"
					name="rating"
					type="number"
					min={1}
					max={5}
					value={formData.rating}
				/>
				<br />
				<br />
				<button>Add </button>
			</form>
		</div>
	);
}
