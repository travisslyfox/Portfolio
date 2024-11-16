import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Paragraph from "../components/Paragraph";

const cardStyles = { height: "fill", width: "fill" };

function Sandbox() {
	const [pageContent, updatePageContent] = useState({
		formContainer: [<Paragraph key="0" />],
		formKeyIndex: 1,
		socialContainer: <h1>Instagram</h1>,
		profileContainer: <h1>Picture</h1>,
		contactContainer: <h1>Phone</h1>,
	});

	const addParagraph = (e) => {
		updatePageContent((prevState) => {
			let pc = { ...prevState };
			pc.formContainer = [
				...pageContent.formContainer,
				<Paragraph key={pageContent.formKeyIndex} />,
			];
			pc.formKeyIndex++;
			return pc;
		});
	};

	const submitForm = (e) => {
		updatePageContent((prevState) => {
			let pc = { ...prevState };
			pc.formContainer = pageContent.renderContainer;
			return pc;
		});
	};

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">{pageContent.formContainer}</div>
				<Button onClick={addParagraph}>Add Paragraph</Button>
				<Button>Add social</Button>
				<Button>Add contact</Button>
				<Button>Add resume</Button>
				<Button>preview</Button>
				<Button onClick={submitForm}>Submit</Button>
			</div>
		</React.Fragment>
	);
}
export default Sandbox;
