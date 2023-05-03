import React from "react";
import "../App.css";

function Contact() {
	return (
		<div>
			<p className="text-loud" style={{ marginBottom: 40 }}>
				Want to get in touch?
			</p>
			<h3 style={{ marginBottom: 40 }}>
				The best way to contact me is via email at{" "}
				<a href="mailto: travisslyfox@gmail.com">travisslyfox@gmail.com</a> You
				can also text or call me at 562-448-2332
			</h3>
			<h3>
				Also check me out on{" "}
				<a href="https://www.linkedin.com/in/travisslyfox">LinkedIn</a> and even
				this website itself on{" "}
				<a href="https://www.github.com/travisslyfox">GitHub</a>
			</h3>
		</div>
	);
}

export default Contact;
