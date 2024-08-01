import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FilterCards from "./components/FilterCards";
import Cards from "./components/Cards";
import Spinner from "./components/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrl, filterData } from "./data";

const App = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState(filterData[0].title);

	async function fetchData() {
		// Show loading spinner
		setLoading(true);

		// Wait for data to get fetched
		try {
			const response = await fetch(apiUrl);
			if (!response.ok) {
				throw new Error("SOMETHING WENT WRONG");
			}
			const output = await response.json();

			setCourses(output.data);
		} catch (e) {
			toast.error(e);
		}

		// Make loading spinner invisible
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className=" flex min-h-screen flex-col  bg-bgDark2 ">
			<Navbar />
			<div className=" ">
				<FilterCards
					filterData={filterData}
					category={category}
					setCategory={setCategory}
				/>
				<div className=" w-11/12 max-w-[1200px]  min-h-[50vh] mx-auto flex flex-wrap justify-center items-start  ">
					{loading ? <Spinner /> : <Cards courses={courses} category={category} />}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default App;
