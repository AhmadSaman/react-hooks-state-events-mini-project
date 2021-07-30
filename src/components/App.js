import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [categorySelected, setCategorySelected] = useState("All");
	const [tasks, setTasks] = useState(TASKS);
	function onCategorySelected(category) {
		setCategorySelected(category);
	}
	function handleTaskFormSubmit(newTask) {
		setTasks([...tasks, newTask]);
	}
	function handleDeleteItem(text) {
		const newTasks = tasks.filter((task) => task.text !== text);
		setTasks(newTasks);
	}
	const visibleTasks = tasks.filter((task) => {
		if (categorySelected === "All") return true;
		return task.category === categorySelected;
	});
	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				categories={CATEGORIES}
				categorySelected={categorySelected}
				onCategorySelected={onCategorySelected}
			/>
			<NewTaskForm
				categories={CATEGORIES}
				onTaskFormSubmit={handleTaskFormSubmit}
			/>
			<TaskList
				tasks={visibleTasks}
				categorySelected={categorySelected}
				onDeleteItem={handleDeleteItem}
			/>
		</div>
	);
}

export default App;
