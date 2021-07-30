import React from "react";

function CategoryFilter({ categories, categorySelected, onCategorySelected }) {
	const displayCategory = categories.map((category, index) => (
		<button
			className={category === categorySelected ? "selected" : ""}
			key={index}
			onClick={() => onCategorySelected(category)}
		>
			{category}
		</button>
	));
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{displayCategory}
		</div>
	);
}

export default CategoryFilter;
