import React from "react";
import Profile from "../components/Profile";

function Home() {
	return (
		<div>
			<h6>Hello, my name is</h6>
			<h1 className="text-header">Travis Fox</h1>
			<h2>I am a software engineer</h2>
			<h4>I make websites</h4>
			<h6>Like the one you are on!</h6>
			<Profile />
		</div>
	);
}

export default Home;
