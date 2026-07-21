import NotificationItem from "./NotificationItem";

const NotificationPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "New Course Available",
      message: "AWS Advanced Networking has been added.",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Course Completed",
      message: "Congratulations! You completed React Fundamentals.",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 3,
      title: "Learning Reminder",
      message: "Continue your Tailwind CSS course today.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 4,
      title: "Certificate Ready",
      message: "Your JavaScript certificate is now available.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 5,
      title: "New Assignment",
      message: "Complete the Advanced Tailwind CSS project.",
      time: "2 days ago",
      read: false,
    },
  ];

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      ></div>

      {/* Notification Panel */}
      <div className="absolute right-0 top-14 w-96 max-w-[95vw] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border z-50">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">

          <h2 className="text-xl font-bold dark:text-white">
            Notifications
          </h2>

          <button
            onClick={onClose}
            aria-label="Close Notifications"
            className="text-gray-600 hover:text-red-500 text-xl"
          >
            ✕
            <span className="sr-only">
              Close Notification Panel
            </span>
          </button>

        </div>

        {/* Notifications */}
        <div className="max-h-[450px] overflow-y-auto overflow-x-hidden p-4 space-y-3">

          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}

        </div>

        {/* Footer */}
        <div className="border-t p-4">

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:scale-95 transition"
          >
            View All Notifications
          </button>

        </div>

      </div>
    </>
  );
};

export default NotificationPanel;