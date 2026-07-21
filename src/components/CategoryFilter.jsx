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
    <section className="bg-white dark:bg-gray-900 py-8 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Browse by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105
                ${
                  category === item
                    ? "bg-blue-600 text-white shadow-blue-300"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-white"
                }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CategoryFilter;