import {
  Code2,
  Palette,
  Cloud,
  Settings,
  Layers,
} from "lucide-react";

const categories = [
  {
    name: "All",
    icon: Layers,
  },
  {
    name: "Development",
    icon: Code2,
  },
  {
    name: "Programming",
    icon: Code2,
  },
  {
    name: "Design",
    icon: Palette,
  },
  {
    name: "Cloud",
    icon: Cloud,
  },
  {
    name: "DevOps",
    icon: Settings,
  },
];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Browse Categories
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Select a category to explore professional courses.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setCategory(item.name)}
                className={`flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
                  ${
                    category === item.name
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-300 scale-105"
                      : "bg-white text-gray-700 shadow hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-blue-600"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default CategoryFilter;