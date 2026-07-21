const NotificationItem = ({ notification }) => {
  return (
    <div
      className={`p-4 rounded-lg border transition cursor-pointer hover:bg-blue-50 focus-within:ring-2 focus-within:ring-blue-400 active:scale-[0.98]
      ${
        notification.read
          ? "bg-white border-gray-200"
          : "bg-blue-100 border-blue-300"
      }`}
    >
      <div className="flex justify-between items-start">

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h3 className="font-semibold text-gray-800">
              {notification.title}
            </h3>

            {!notification.read && (
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            )}

          </div>

          <p className="text-sm text-gray-600 mt-1">
            {notification.message}
          </p>

          <p className="text-xs text-gray-400 mt-3">
            {notification.time}
          </p>

        </div>

      </div>
    </div>
  );
};

export default NotificationItem;