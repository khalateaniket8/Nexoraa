import React from "react";

const DashboardCard = ({
  icon,
  title,
  value,
  color,
}) => {
  return (
    <div
      className="
      bg-white
      dark:bg-gray-800
      rounded-2xl
      shadow-lg
      p-6
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
    "
    >
      <div
        className={`text-5xl mb-4 ${color}`}
      >
        {icon}
      </div>

      <h2 className="text-3xl font-bold dark:text-white">
        {value}
      </h2>

      <p className="text-gray-500 mt-2">
        {title}
      </p>
    </div>
  );
};

export default DashboardCard;