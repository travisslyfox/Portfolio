import React from "react";
import Profile from "../components/Profile";

const profileStyles = {
	maxWidth: "300px",
	maxHeight: "600px",
	borderRadius: "150px",
	marginBottom: "20px",
	animation: "lightUp 4s",
	animationIterationCount: "1",
};

function Home() {
	return (
		<div>
			<div className="home-content row row-cols-auto mb-5">
				<h4>Hello, my name is</h4>
				<h1 className="text-header col-12">Travis Fox</h1>
				<div className="col-xl-5 col-lg-6 col-md-7">
					<Profile styleProps={profileStyles} />
				</div>
				<div className="about-para col-xl-7 col-lg-6 col-md-5 fs-5">
					<div className="">
						I am a Software Developer proficient in the C#/.Net stack that
						specializes in Web Development. I am experienced with working on SQL
						databases, REST API's backed by C#/.Net Core, and front-end
						development using React.
					</div>
					<div className="mt-3">
						Currently working on a project that uses Azure Static Web Apps,
						GitHub Deployment, and Azure Cosmos DB. In fact this site is
						currently being hosted using Azure and code checkin is handled with
						GitHub Actions.
					</div>
					<div className="mt-3">
						I'm also familiar with the Agile methodology and have worked in a
						Scrum environment. I am a quick learner and am always looking to
						learn new technologies and improve my skills. I am also a team
						player and enjoy working with others to solve problems and create
						solutions.
					</div>
					<div className="mt-5">
						I am currently looking for a full-time position as a Software
						Developer, although I am open and currently freelancing.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
