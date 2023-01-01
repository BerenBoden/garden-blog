import React, { useState } from "react";
import Sidebar from "../admin/Sidebar";
import Dashboard from "../admin/Dashboard";
import Analytics from "../admin/Analytics";
import Notifications from "../admin/notifications/Notifications";
import CreateUser from "../admin/CreateUser";
import ViewUsers from "../admin/ViewUsers";
import CreatePost from "../admin/Posts/CreatePost";
import ViewPosts from "../admin/Posts/ViewPosts";
import CreateProduct from "../admin/CreateProduct";
import ViewProducts from "../admin/ViewProducts";
import Settings from "../admin/Settings";
import Header from "../admin/Header";
import { useRouter } from 'next/router';

const admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = router.pathname;
  const routes = {
    '/dashboard': Dashboard,
    '/dashboard/create-post': CreatePost,
    '/dashboard/view-posts': ViewPosts,
    '/dashboard/create-user': CreateUser,
    '/dashboard/view-users': ViewUsers,
    '/dashboard/create-product': CreateProduct,
    '/dashboard/view-products': ViewProducts,
    '/dashboard/settings': Settings,
    '/dashboard/analytics': Analytics
  };
  const Component = routes[pathname];

  const clickHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header onClick={clickHandler} />
      <div className="mt-24"></div>
      <div
        style={{ height: "calc(100vh - 6rem)" }}
        className="flex overflow-y-hidden px-24 w-full"
      >
        <div className={`width-15 h-full ${!sidebarOpen && "hidden"}`}>
          <Sidebar
            open={sidebarOpen}
            onClick={clickHandler}
          />
        </div>
        <div className="my-auto mx-2">
          <div className="h-screen border-dashed border-l-gray-300 border-l" />
        </div>
        <div
          className={`width-50 mx-4 h-full ${
            !sidebarOpen && "w-50"
          } overflow-y-hidden`}
        >
          {Component ? React.createElement(Component) : null}
        </div>
        <div className="my-auto mx-2">
          <div className="h-screen border-dashed border-l-gray-300 border-l" />
        </div>
        <div
          className={`width-35 h-full ${
            !sidebarOpen && "w-50"
          } overflow-y-hidden`}
        >
          <Notifications open={sidebarOpen} />
        </div>
      </div>
    </>
  );
};

export default admin;
