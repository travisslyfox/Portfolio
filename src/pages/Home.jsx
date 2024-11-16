import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";

const profileStyles = {
	maxWidth: "300px",
	maxHeight: "600px",
	border: "1px solid black",
	borderRadius: "150px",
	marginBottom: "20px",
};

function Home() {
	const [techStack, setTechStack] = useState({
		displayText: "",
		bank: [
			"JavaScript developer.",
			"C# developer.",
			"SQL developer.",
			"React developer.",
			".NET developer.",
			"Tech enthusiast.",
		],
		charIndex: 0,
		techIndex: 0,
		isDeleting: false,
	});

	useEffect(() => {
		let timer;

		const currentTech = techStack.bank[techStack.techIndex];

		if (!techStack.isDeleting && techStack.charIndex < currentTech.length) {
			timer = setTimeout(() => {
				setTechStack((prevState) => {
					const ts = { ...prevState };
					ts.displayText = ts.displayText + currentTech[techStack.charIndex];
					ts.charIndex = ts.charIndex + 1;
					return ts;
				});
			}, 80);
		} else if (techStack.charIndex === currentTech.length) {
			setTechStack((prevState) => {
				const ts = { ...prevState };
				ts.isDeleting = true;
				return ts;
			});
			setTimeout(() => {
				setTechStack((prevState) => {
					const ts = { ...prevState };
					ts.displayText = ts.displayText.slice(0, -1);
					ts.charIndex = ts.charIndex - 1;
					return ts;
				});
			}, 2000);
		} else if (techStack.isDeleting && techStack.charIndex > 0) {
			timer = setTimeout(() => {
				setTechStack((prevState) => {
					const ts = { ...prevState };
					ts.displayText = ts.displayText.slice(0, -1);
					ts.charIndex = ts.charIndex - 1;
					return ts;
				});
			}, 80);
		} else if (techStack.isDeleting && techStack.charIndex === 0) {
			setTechStack((prevState) => {
				const ts = { ...prevState };
				ts.isDeleting = false;
				ts.techIndex = (ts.techIndex + 1) % techStack.bank.length;
				return ts;
			});
		}

		return () => {
			clearTimeout(timer);
		};
	}, [
		techStack.charIndex,
		techStack.isDeleting,
		techStack.bank,
		techStack.techIndex,
	]);

	return (
		<div>
			<div className="home-content row row-cols-auto mb-5">
				<div className="container">
					<div>
						<h4>Hello, my name is</h4>
						<h1 className="text-header col-12">Travis Fox</h1>
						<div className="mt-3">
							<h4>
								I am {techStack.displayText}
								<span className="text-blinking">_</span>
							</h4>
						</div>
					</div>
					<div style={{ marginTop: "100%" }}>{/* <h1>TECH ICONS</h1> */}</div>
				</div>

				<div className="about-para col-xl-1 col-lg-1 col-md-1 fs-1"></div>

				<div
					className="about-para col-xl-6 col-lg-5 col-md-4"
					style={{ fontSize: "large" }}
				>
					<div className="mt-3">
						I come from a family of software developers. My sister is currently
						studying computer science, my brother is employed as a software
						developer, and my father wrote the book on .NET (
						<a href="https://www.oreilly.com/library/view/debugging-aspnet/0735711410/">
							literally
						</a>
						)! I followed suit and am now a full-stack developer myself.
					</div>
					<div className="mt-3">
						I specializes in Web Development and have experience working on SQL
						databases, REST API's backed by C#/.Net Core, and front-end
						development using React. I am Currently working on a project that
						uses Azure Static Web Apps, GitHub Deployment, and Azure Cosmos DB.
						In fact this site is currently being hosted using Azure and code
						checkin is handled with GitHub Actions.
					</div>
					<div className="mt-3">
						I'm also familiar with the Agile methodology and have working in a
						Scrum environment. I am a quick learner and am always looking to
						learn new technologies and improve my skills. I am a team player and
						enjoy working with others to solve problems and create solutions.
					</div>
					<div className="mt-3">
						When I am not working I am most likely still at the computer either
						reading, playing video games, or hanging out with my cats.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
