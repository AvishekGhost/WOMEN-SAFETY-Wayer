import React from "react";

const BottomBar = ({ children }) => {
	const phantomDivStyle = {
		display: "block",
		height: "150px",
		width: "100%",
	};

	const footerStyle = {
		fontSize: "10px",
		color: "white",
		borderTop: "1px solid #e7e7e7",
		textAlign: "center",
		position: "fixed",
		left: 0,
		bottom: "0px",
		height: "150px",
		width: "100%",
	};

	return (
		<div>
			<div style={phantomDivStyle} />
			<div style={footerStyle}>{children}</div>
		</div>
	);
};

export default BottomBar;
