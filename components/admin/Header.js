import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaBell } from "react-icons/fa";
import NotificationComponent from "./Notifications/NotificationComponent";
import { useState } from "react";

function Header({ onClick }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
    { id: 3, text: "Notification 3" },
    { id: 4, text: "Notification 4" },
    { id: 5, text: "Notification 5" },
  ];
  return (
    <div className="w-full h-16 fixed top-0 bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
      <div className="flex items-center justify-between w-full px-24">
        <div className="flex items-left cursor-pointer py-2 flex-1">
          <GiHamburgerMenu size={24} onClick={onClick} />
        </div>
        <ul className="flex justify-between items-center">
          <li className="px-4">
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="form-input pl-10 pr-3 py-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="search"
              />
            </div>
          </li>
          <li
            className="mr-2 cursor-pointer px-4"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell className="h-5 w-5 text-black" />
            {showNotifications && (
              <div className="absolute top-16 right-48 z-10 text-black p-4 bg-white rounded-md shadow-xl">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="h-100 flex items-center justify-center"
                  >
                    <NotificationComponent notification={notification} />
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="pl-4">KDh</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;