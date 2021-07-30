import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
	const [inputObject, setInputObject] = useState({
		text: "",
		category: "code",
	});
	function handleChange(event) {
		setInputObject({
			...inputObject,
			[event.target.name]: event.target.value,
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		onTaskFormSubmit(inputObject);
		setInputObject({
			text: "",
			category: "code",
		});
	}
	const displayOptions = categories.map((category, index) => {
		return (
			category !== "All" && (
				<option key={index} value={category}>
					{category}
				</option>
			)
		);
	});
	return (
		<form className="new-task-form" onSubmit={handleSubmit}>
			<label>
				Details
				<input
					type="text"
					name="text"
					value={inputObject.text}
					onChange={handleChange}
				/>
			</label>
			<label>
				Category
				<select
					name="category"
					value={inputObject.category}
					onChange={handleChange}
				>
					{/* render <option> elements for each category here */}
					{displayOptions}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;
