import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const cardStyles = { height: "200px", width: "200px" };

function Sandbox() {
	const [entityContainer, updateEntityContainer] = useState([
		<Card style={cardStyles}></Card>,
	]);

	return (
		<>
			<div className="container">
				<div className="row">{entityContainer}</div>
			</div>
		</>
	);
}
export default Sandbox;
