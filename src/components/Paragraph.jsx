import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Form(props) {
	const [formData, updateFormData] = useState("Hello");

	const formUpdater = (e) => {
		updateFormData((prevState) => {
			let fd = { ...prevState };
			fd = e.target.value;
			return fd;
		});
	};

	return (
		<div>
			<Card
				style={{
					height: "150px",
					alignItems: "center",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "10px",
					marginBottom: "10px",
				}}
			>
				<input
					name="paragraph"
					value={formData}
					onChange={formUpdater}
					key={props.key}
					style={{
						height: "100%",
						width: "100%",
						background: "transparent",
						border: "none",
					}}
				></input>
			</Card>
		</div>
	);
}

export default Form;
