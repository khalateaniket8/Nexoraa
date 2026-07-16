const CategoryFilter = ({ category, setCategory }) => {

  const categories = [
    "All",
    "Development",
    "Programming",
    "Design",
    "Cloud",
    "DevOps",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 my-10">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full transition
          ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;