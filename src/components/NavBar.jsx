import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Resume from "../components/Resume";
import Pdf from "../Travis Fox - Resume.pdf";
import "../App.css";

function NavBar() {
	const [show, setShow] = useState(false);

	return (
		<div>
			<Navbar bg="#0d1640" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/" className="text-white">
								Home
							</Nav.Link>
							<Nav.Link href="about" className="text-white">
								About
							</Nav.Link>
							<Nav.Link href="contact" className="text-white">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Button
							variant="primary"
							style={{ backgroundColor: "transparent" }}
							onClick={() => setShow(!show)}
							className="highlight"
						>
							Resume
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* refactor to callback */}
			<Modal show={show} onHide={() => setShow(!show)}>
				<Modal.Body>
					<Resume />
					<a href={Pdf}>PDF/Download</a>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default NavBar;
