import React from "react";

const spinner = () => {
	return (
		<div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center space-y-2">
			<div className="spinner "></div>
			<p className=" text-bgDark textlg font-semibold">Loading...</p>
		</div>
	);
};

export default spinner;
