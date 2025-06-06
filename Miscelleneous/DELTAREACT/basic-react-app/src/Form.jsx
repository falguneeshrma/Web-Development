function handleFormSubmission(event) {
	event.preventDefault();
	console.log("form is submitted");
}

export default function Form() {
	return (
		<form>
			<input placeholder="Type here to write" />
			<button onClick={handleFormSubmission}>Submit</button>
		</form>
	);
}
