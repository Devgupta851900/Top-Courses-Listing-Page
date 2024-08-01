import React from "react";
// import { filterData } from "../data";

const FilterCards = ({ filterData, category, setCategory }) => {
	function filterHandler(titleData) {
		setCategory(titleData);
	}

	return (
		<div className="flex w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center ">
			{filterData.map((data) => {
				return (
					<button
						onClick={() => {
							filterHandler(data.title);
						}}
						className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
						transition-all duration-200
						${
							category === data.title
								? "bg-opacity-60 border-white"
								: "border-opacity-40 border-transparent"
						}

						`}
						key={data.id}
					>
						{data.title}
					</button>
				);
			})}
		</div>
	);
};

export default FilterCards;
