import { useEffect, useRef, useState } from "react";

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
    message: "You completed React Fundamentals.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Learning Reminder",
    message: "Continue your Tailwind CSS course.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    title: "Weekly Summary",
    message: "You studied 4 hours this week.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 5,
    title: "New Lesson",
    message: "Lesson 5 added to JS Basics.",
    time: "2 days ago",
    read: false,
  },
];

const NotificationButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Open notifications"
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span aria-hidden="true">🔔</span>
        <span className="sr-only">Open notifications</span>

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1.5 text-[11px] font-semibold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-40 mt-2 min-w-[18rem] max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Close notifications panel"
            >
              ✕
            </button>
          </div>

          <div className="max-h-72 space-y-1 overflow-y-auto px-2 py-2">
            {notifications.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(false)}
                className={`w-full rounded-2xl px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  item.read
                    ? "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    : "bg-blue-50 text-gray-900 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-white dark:hover:bg-blue-800"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.time}</span>
                </div>
                <p className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-300">{item.message}</p>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-200 p-3 text-center dark:border-gray-700">
            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationButton;