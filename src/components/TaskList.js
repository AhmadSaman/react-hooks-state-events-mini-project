import React from "react";
import Task from "./Task";
function TaskList({ tasks, onDeleteItem }) {
	const displayTask = tasks.map((task, index) => (
		<Task key={index} {...task} onDeleteItem={onDeleteItem} />
	));

	return (
		<div className="tasks">
			{/* display a list of tasks using Task component */}
			{displayTask}
		</div>
	);
}

export default TaskList;
