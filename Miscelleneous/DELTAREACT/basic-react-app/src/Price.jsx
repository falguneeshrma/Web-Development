export default function Price({ oldPrice, newPrice }) {
	let oldStyles = {
		textDecorationLine: "line-through",
	};
	let newSyles = {
		fontWeight: "bold",
	};
	let styles = {
		backgroundColor: "#e0c367",
		height: "30px",
		width: "200",
		borderBottomLeftRadius: "14px",
		borderBottomRightRadius: "11px",
	};
	return (
		<div style={styles}>
			<span style={oldStyles}>{oldPrice}</span>
			&nbsp;&nbsp;&nbsp;
			<span style={newSyles}>{newPrice}</span>
		</div>
	);
}
