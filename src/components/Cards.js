import React, { useState } from "react";
import CourseCard from "./CourseCard";

const Cards = ({ courses, category }) => {
	// To keep track of liked courses
	const [likedCourses, setLikedCourses] = useState([]);

	// Storing all cards in one single array
	const allCourses = [];

	const getCourses = () => {
		if (category === "All") {
			Object.values(courses).forEach((courseCategory) => {
				courseCategory.forEach((course) => {
					allCourses.push(course);
				});
			});

			return allCourses;
		} else {
			// returning  only the array of specific category related courses
			return courses[category];
		}
	};

	return (
		<div className=" flex flex-wrap justify-center gap-4 mb-4">
			{getCourses().map((course) => {
				return (
					<CourseCard
						key={course.id}
						course={course}
						likedCourses={likedCourses}
						setLikedCourses={setLikedCourses}
					></CourseCard>
				);
			})}
		</div>
	);
};

export default Cards;
