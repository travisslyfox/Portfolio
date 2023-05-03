import React from "react";

function Footer() {
	return (
		<div
			style={{ position: "fixed", bottom: 0, right: 0, marginRight: 15 }}
			className="text-white-custom"
		>
			<p>Hosted on Azure using Static Web Apps</p>
		</div>
	);
}

export default Footer;
