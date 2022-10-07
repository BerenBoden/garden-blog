import Link from "next/link";
import Menu from "./menu";

const Header = ({ addClass, openSearch }) => {
    return (
        <>
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <Link href="/">
                                    <h5 className="d-md-inline font-weight-bold">
                                        Gardening & Herbs
                                    </h5>
                                </Link>
                            </div>
                            <div className="col-md-9 col-xs-6 text-right header-top-right ">
                                <ul className="list-inline nav-topbar d-none d-md-inline">
                                    <li className="list-inline-item">
                                        <Link href="/login">
                                            <a className="d-non d-md-inline">
                                                <i className="elegant-icon icon_account_alt mr-5"></i>
                                                Log in
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                                <button className="search-icon d-none d-md-inline" onClick={openSearch}>
                                    <span className="mr-15 text-muted font-small">
                                        <i className="elegant-icon icon_search mr-5"></i>
                                        Search
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu addClass={addClass} />
            </header>
        </>
    );
};

export default Header;
