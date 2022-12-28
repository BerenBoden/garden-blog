import Link from "next/link";
import React from "react";
const Footer = ({ removeClass }) => {
    return (
        <>
            <footer className="pt-50 pb-20 bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sidebar-widget wow fadeInUp animated mb-30">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">About us</h5>
                                </div>
                                <div className="textwidget">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt.
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                        Address
                                        </strong>
                                        <br />
                                        123 Street.
                                        <br />
                                        Taranaki.                                 
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                            Follow us
                                        </strong>
                                    </p>
                                    <br />
                                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="fb"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="tw"
                                                    target="_blank"
                                                    title="Tweet now"
                                                >
                                                    <i className="elegant-icon social_twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="pt"
                                                    target="_blank"
                                                    title="Pin it"
                                                >
                                                    <i className="elegant-icon social_pinterest"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                                data-wow-delay="0.1s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Quick links</h5>
                                </div>
                                <ul className="font-small">
                                    <li className="cat-item cat-item-2">
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-4">
                                        <Link href="/forum">
                                            <a>Forum</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-5">
                                        <Link href="/">
                                            <a>Articles</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-6">
                                        <Link href="/#">
                                            <a>Courses</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>About us</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Privacy policy</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Terms & conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                                data-wow-delay="0.3s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Newsletter</h5>
                                </div>
                                <div className="newsletter">
                                    <p className="font-medium">
                                        Subscribe to our newsletter and get our
                                        newest updates right on your inbox.
                                    </p>
                                    <form className="input-group form-subcriber mt-30 d-flex">
                                        <input
                                            type="email"
                                            className="form-control bg-white font-small"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            className="btn bg-primary text-white"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                        <label className="mt-20">
                                            {" "}
                                            <input
                                                className="mr-5"
                                                name="name"
                                                type="checkbox"
                                                value="1"
                                                required=""
                                            />{" "}
                                            I agree to the{" "}
                                            <Link href="/#">
                                                <a href="/#" target="_blank">
                                                    terms &amp; conditions
                                                </a>
                                            </Link>{" "}
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">
                            © 2020, webfirst.co.nz{" "}
                        </p>
                        <p className="float-md-right font-small text-muted">
                            Design by{" "}
                            <Link href="https://alithemes.com">
                                <a target="_blank">
                                    B. Boden
                                </a>
                            </Link>{" "}
                            | All rights reserved
                        </p>
                    </div>
                </div>
            </footer>

            <div className="dark-mark" onClick={removeClass}></div>
        </>
    );
};

export default Footer;