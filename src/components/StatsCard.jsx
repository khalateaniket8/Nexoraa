const StatsCard = ({ icon, number, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4">{icon}</div>

      <h2 className="text-3xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="text-gray-600 mt-2">
        {title}
      </p>
    </div>
  );
};

export default StatsCard;