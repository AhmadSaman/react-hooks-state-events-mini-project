import React from "react";

function Task({ text, category, onDeleteItem }) {
	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
			<button onClick={() => onDeleteItem(text)} className="delete">
				X
			</button>
		</div>
	);
}

export default Task;
