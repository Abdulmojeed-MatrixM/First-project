import React from "react";
import "./../styles/JobForm.css";

const categoryOptions = ["Read Emails", "Send Emails", "Web Parsing"];

function CategorySelector({ categories, setCategories }) {
  const handleCategoryToggle = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      if (categories.length >= 3) {
        alert("You can select a maximum of 3 categories.");
        return;
      }
      setCategories([...categories, category]);
    }
  };

  return (
    <div className="category-selector">
      {categoryOptions.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-btn ${categories.includes(category) ? "selected" : ""}`}
          onClick={() => handleCategoryToggle(category)}
        >
          {category}
        </button>
      ))}
      {categories.length > 0 && (
        <div className="selected-categories">
          Selected: {categories.join(", ")}
        </div>
      )}
    </div>
  );
}

export default CategorySelector;
