import React from "react";
import resumeImg from "../photos/resume.png";

function Resume() {
	return (
		<div>
			<img
				src={resumeImg}
				alt="logo"
				style={{ maxHeight: "100%", maxWidth: "100%" }}
			/>
		</div>
	);
}

export default Resume;
