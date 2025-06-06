function handleClick(event) {
	console.log(event);
}

function AddItem() {
	console.log("Added to Cart!");
}
function RemoveItem() {
	console.log("Removed from Cart!");
}
function LikeItem() {
	console.log("Added to Liked Items !");
}

export default function Button() {
	return (
		<div>
			<button onClick={handleClick}>Chat</button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={AddItem}>Add to Cart</button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={RemoveItem}>Remove from Cart</button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button onMouseOver={LikeItem}>Like</button>
		</div>
	);
}
