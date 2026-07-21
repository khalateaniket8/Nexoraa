const StatsCard = ({ icon, number, title }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">

      {/* Icon */}
      <div className="text-6xl mb-5">
        {icon}
      </div>

      {/* Number */}
      <h2 className="text-4xl font-extrabold text-blue-600">
        {number}
      </h2>

      {/* Title */}
      <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-medium">
        {title}
      </p>

    </div>
  );
};

export default StatsCard;