import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const CourseCard = ({ course, likedCourses, setLikedCourses }) => {
	function clickHandler(event) {
		// id of the currently clicked course already there meaning course already liked
		// so we removed and made it unliked
		if (likedCourses.includes(course.id)) {
			setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
			toast.warning("Like Removed");
		} else {
			// course is not already liked so add it to array
			if (likedCourses.length === 0) {
				// if array empty we add only current course's id
				setLikedCourses([course.id]);
			} else {
				// else we keep entire previous state array and add the current course's id also
				setLikedCourses((prev) => [...prev, course.id]);
			}
			toast.success("Course Liked");
		}
	}

	return (
		<div className=" w-[300px] bg-bgDark rounded-md overflow-hidden ">
			<div className="relative ">
				<img src={course.image.url} alt={course.image.alt}></img>

				<div>
					<button
						onClick={clickHandler}
						className=" w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white absolute right-2 -bottom-3 "
					>
						{likedCourses.includes(course.id) ? (
							<FcLike fontSize="1.75rem" />
						) : (
							<FcLikePlaceholder fontSize="1.75rem" />
						)}
					</button>
				</div>
			</div>

			<div className="p-4">
				<p className=" text-white font-semibold text-lg leading-6 ">
					{course.title}
				</p>
				<p className=" mt-2 text-white ">
					{course.description.length > 100
						? `${course.description.substring(0, 100)}...`
						: course.description}
				</p>
			</div>
		</div>
	);
};

export default CourseCard;
