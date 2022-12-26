import MetisMenu from "metismenujs";
import Link from "next/link";
import { useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';

const NavMenu = ({ isToggled }) => {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (
        <>
            <div className={isToggled ? "mobilemenu active" : "mobilemenu hide"}>
                <PerfectScrollbar>
                    <ul className="metismenu text-muted" id="metismenu">
                        <li>
                            <Link href="/" aria-expanded="false">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Pages
                            </a>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-typography">
                                        Typography
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-register">
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-search">
                                        Search
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-author">
                                        Author
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-404">
                                        404 page
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Category
                            </a>
                            <ul>
                                <li>
                                    <Link href="/category-list">
                                        List layout
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-grid">
                                        Grid layout
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-masonry">
                                        Masonry layout
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-big">
                                        Big layout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Single post
                            </a>
                            <ul>
                                <li>
                                    <Link href="/single">
                                        Default
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-2">
                                        Big image
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-3">
                                        Left image
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-4">
                                        With sidebar
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default NavMenu;
