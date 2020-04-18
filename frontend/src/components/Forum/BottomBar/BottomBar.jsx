import React from "react";

const BottomBar = ({ children }) => {
	return (
		<div>
			<div className="forum-phantom-div-style" />
			<div className="forum-footer-style">{children}</div>
		</div>
	);
};

export default BottomBar;
