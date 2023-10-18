function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  //   const category ={ [ name: "Everything" ], [name: "Top-headlines" ]};

  return (
    <>
      <label className="mr-4 text-black">Filter By Category:</label>
      <select
        value={selectedCategory}
        onChange={onCategoryChange}
        className="text-pink-500 border-none mx-2 "
      >
        {/* <option value="">All Categories</option> */}
        {categories.map((category) => (
          <option key={category.id} value={category.id} className="py-4">
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default CategoryFilter;
