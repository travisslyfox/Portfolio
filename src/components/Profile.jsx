import React from "react";
import profilePic from "../photos/profile.jpeg";

function Profile() {
	return (
		<div>
			<img
				src={profilePic}
				alt="logo"
				style={{ maxWidth: 200, maxHeight: 400 }}
			/>
		</div>
	);
}

export default Profile;
