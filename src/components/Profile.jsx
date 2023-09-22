import React from "react";
import profilePic from "../photos/profile.jpeg";

function Profile({ styleProps }) {
	return (
		<div>
			<img src={profilePic} alt="logo" style={styleProps} />
		</div>
	);
}

export default Profile;
