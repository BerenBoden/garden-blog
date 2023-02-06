import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import NavMenu from "./nav";

const content = ["article", "product"];

const Menu = () => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [size, setSize] = useState(0);
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCategories = await Promise.all(
        content.map(async (item) => {
          const res = await fetch(
            `http://localhost:5000/api/identifiers?start=0&limit=-1&content=${item}&identifier=categories`
          );
          const categories = await res.json();
          return { [item]: categories };
        })
      );
      //The reduce function is being used to combine all the objects in the 'allCategories'
      //array into a single object. The accumulator (acc) starts as an empty object, and for
      //each iteration, it takes the current object (curr) and adds its properties to the
      //accumulator using object spread syntax. At the end of all iterations, the accumulator
      //will contain all properties from all objects in the 'allCategories' array.
      setCategories(
        allCategories.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      );
    };
    fetchData();
  }, []);
  const toggleTrueFalse = () => setToggled(!isToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
        <div className="container align-self-center position-relative">
          <div className="main-nav float-left ">
            <nav>
              <ul className="main-menu d-none d-lg-inline font-small">
                <li>
                  <Link href="/">
                    <a>
                      <i className="elegant-icon icon_house_alt mr-5 "></i>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="has-mega-menu">
                  <Link href="/articles">
                    <a>Articles</a>
                  </Link>
                  <ul className="mega-menu grid grid-cols-5 gap-4 p-4">
                    {categories.article &&
                      categories.article.data.map(
                        ({ attributes, id }, index) => {
                          return (
                            <Link
                              href={`/articles/categories/${attributes.slug}`}
                              key={id}
                            >
                              <li className="sub-mega-menu col-span-1 cursor-pointer">
                                <div className="">
                                  <p className="font-bold capitalize">
                                    {attributes.name}
                                  </p>

                                  <p className="text-xs capitalize">
                                    {attributes.meta_description}
                                  </p>
                                </div>
                              </li>
                            </Link>
                          );
                        }
                      )}
                  </ul>
                </li>
                <li className="has-mega-menu">
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                  <ul className="mega-menu grid grid-cols-5 gap-4 p-4">
                    {categories.product &&
                      categories.product.data.map(
                        ({ attributes, id }) => {
                          return (
                            <Link
                              href={`/products/categories/${attributes.slug}`}
                              key={id}
                            >
                              <li className="sub-mega-menu col-span-1 cursor-pointer">
                                <div className="">
                                  <p className="font-bold capitalize">
                                    {attributes.name}
                                  </p>

                                  <p className="text-xs capitalize">
                                    {attributes.meta_description}
                                  </p>
                                </div>
                              </li>
                            </Link>
                          );
                        }
                      )}
                  </ul>
                </li>
                <li
                  className={
                    router.pathname === "/courses" ? "current-item" : ""
                  }
                >
                  <Link href="/courses">
                    <a>Courses</a>
                  </Link>
                </li>
                <li
                  className={router.pathname === "/about" ? "current-item" : ""}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </ul>

              <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                <button onClick={toggleTrueFalse}>
                  <span className="menu-icon mr-10">
                    <span className="menu-icon-inner"></span>
                  </span>
                </button>
                <NavMenu isToggled={isToggled} />
              </div>
            </nav>
          </div>
          <div className="float-right header-tools text-muted font-small">
            <ul className="header-social-network d-inline-block list-inline mr-15">
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon fb text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_facebook"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon tw text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_twitter "></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon pt text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_pinterest "></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
