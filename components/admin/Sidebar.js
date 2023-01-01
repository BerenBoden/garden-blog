import { useState, useRef } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Sidebar = () => {
  const [submenuOpen, setSubmenuOpen] = useState({
    ecommerce: false,
    blogging: false,
    users: false,
  });
  //Sidebar open
  const [open, setOpen] = useState(false);
  //Submenu open
  const [isOpen, setIsOpen] = useState(false);

  //Submenu data
  const submenuLabels = {
    ecommerce: {
      title: "Ecommerce",
      items: [
        { title: "Create a product", slug: "/create-product" },
        { title: "View all products", slug: "/view-products" },
      ],
    },
    blogging: {
      title: "Blogging",
      items: [
        { title: "Create a post", slug: "/create-post" },
        { title: "View all posts", slug: "/view-posts" },
      ],
    },
    users: {
      title: "Users",
      items: [
        { title: "Create a user", slug: "/create-user" },
        { title: "View all users", slug: "/view-users" },
      ],
    },
  };
  const clickHandler = (event, submenu) => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
    setSubmenuOpen((currentSubmenuOpen) => ({
      ...currentSubmenuOpen,
      [submenu]: !currentSubmenuOpen[submenu],
      ecommerce:
        submenu === "ecommerce" ? !currentSubmenuOpen.ecommerce : false,
      blogging: submenu === "blogging" ? !currentSubmenuOpen.blogging : false,
      users: submenu === "users" ? !currentSubmenuOpen.users : false,
    }));
  };

  return (
    <div
      className={`w-full h-full left-0 top-0 z-20 ${
        open ? "block" : "hidden"
      } md:block lg:block xl:block`}
    >
      <div className="w-full h-full overflow-y-auto">
        <ul>
          <li>
            <Link href="/dashboard">
              <a className="text-black font-bold text-lg my-4 block">
                Dashboard
              </a>
            </Link>
          </li>
          {Object.entries(submenuOpen).map(([submenu, isOpen]) => {
            const submenuRef = useRef();
            const { title, items, slug } = submenuLabels[submenu];
            return (
              <li
                key={submenu}
                data-submenu={submenu}
                ref={submenuRef}
                onClick={(event) =>
                  clickHandler(event, submenuRef.current.dataset.submenu)
                }
              >
                <span className="text-black font-bold text-lg my-4 flex items-center cursor-pointer">
                  {title} <BsChevronDown className="text-xs ml-2 mt-1" />
                </span>
                <div className={`${isOpen ? "block" : "hidden"}`}>
                  {items.map((item, index) => {
                    
                    return (
                      <div className="ml-2 ">
                        <Link
                          href={`/dashboard/${
                            item.slug
                          }`}
                          key={index}
                          className="text-black text-xs my-4 block ml-2"
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
          <li>
            <Link href="/dashboard/analytics">
              <a className="text-black font-bold text-lg my-4 block">
                Analytics
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <a className="text-black font-bold text-lg my-4 block">
                Settings
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
