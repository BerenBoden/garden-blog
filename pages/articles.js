import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { process } from "../utils/slugify";
import axios from "axios";
import Layout from "./../components/layout/layout";

function CaregoryList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const pageNumbers = [];
  const router = useRouter();

  const handlePageChange = (pageNumber) => {
    if(pageNumber <= 0 || pageNumber > pageNumbers.length ) return
    setCurrentPage(pageNumber);
    router.push({
      pathname: "/articles",
      query: { page: pageNumber },
    });
  };

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="page-item">
        <div onClick={() =>handlePageChange(number)}>
          <a className="page-link">{number}</a>
        </div>
      </li>
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  const renderPosts = currentPosts.map((post) => {
    return (
      <article className="hover-up-2 transition-normal wow fadeInUp animated">
        <div className="row mb-40 list-style-2">
          <div className="col-md-4">
            <div className="post-thumb position-relative border-radius-5">
              <div
                className="img-hover-slide border-radius-5 position-relative"
                style={{
                  backgroundImage: `url(assets/imgs/news/${""})`,
                }}
              >
                <Link prefetch={false} href={`/articles/${process(post.title)}`}>
                  <a className="img-link">
                    <Image
                      height={150}
                      width={400}
                      src={`https://strapi-production-15df.up.railway.app/uploads${post.image}`}
                      alt="kk"
                    />
                  </a>
                </Link>
              </div>
              <ul className="social-share">
                <li>
                  <Link href="/#">
                    <a>
                      <i className="elegant-icon social_share"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className="fb" title="Share on Facebook" target="_blank">
                      <i className="elegant-icon social_facebook"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className="tw" target="_blank" title="Tweet now">
                      <i className="elegant-icon social_twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className="pt" target="_blank" title="Pin it">
                      <i className="elegant-icon social_pinterest"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 font-small mb-10">
                <Link href={`/articles/${process(post.title)}`}>
                  <a>
                    <span className="post-cat text-primary">{post.title}</span>
                  </a>
                </Link>
              </div>
              <h5 className="post-title font-weight-900 mb-20">
                <Link prefetch={false} href={`/articles/${process(post.title)}`}>
                  <a>{post.description}</a>
                </Link>
                <span className="post-format-icon">
                  <i className="elegant-icon icon_star_alt"></i>
                </span>
              </h5>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{}</span>
                <span className="time-reading has-dot">{"3"} mins read</span>
                <span className="post-by has-dot">{"3"} views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  });

  return (
    <>
      <Layout>
        <main>
          <div className="archive-header pt-50">
            <div className="container">
              <h2 className="font-weight-900">
                {router.pathname === "/articles" && "Articles"}
              </h2>
              <div className="breadcrumb">
                <Link href="/">
                  <a rel="nofollow">Home</a>
                </Link>
                <span></span> {router.pathname === "/articles" && "Articles"}
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  
                  <div>
                    {renderPosts}
                    <div className="pagination-area mb-30 wow fadeInUp animated">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                          <li className="page-item">
                          <div>
                              <a
                                className="page-link"
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                              >
                                <i className="elegant-icon arrow_left"></i>
                              </a>
                            </div>
                          </li>
                          {renderPageNumbers}
                          <li className="page-item">
                            <div>
                              <a
                                className="page-link"
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                              >
                                <i className="elegant-icon arrow_right"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget-area">
                    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                      <img
                        className="about-author-img mb-25"
                        src="/assets/imgs/authors/author.jpg"
                        alt=""
                      />
                      <h5 className="mb-20">Hello, I'm Steven</h5>
                      <p className="font-medium text-muted">
                        Hi, I’m SteNven, a Florida native, who left my career in
                        corporate wealth management six years ago to embark on a
                        summer of soul searching that would change the course of
                        my life forever.
                      </p>
                      <strong>Follow me: </strong>
                      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="fb" target="_blank" title="Facebook">
                              <i className="elegant-icon social_facebook"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="tw" target="_blank" title="Tweet now">
                              <i className="elegant-icon social_twitter"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="pt" target="_blank" title="Pin it">
                              <i className="elegant-icon social_pinterest"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Most popular</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          {posts.slice(0, 3).map((post, i) => (
                            <li className="mb-30 wow fadeInUp animated">
                              <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                  <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                    <Link href={`/articles/${process(post.title)}`}>
                                      <a>{post.title}</a>
                                    </Link>
                                  </h6>
                                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span className="post-on">{}</span>
                                    <span className="post-by has-dot">
                                      {} views
                                    </span>
                                  </div>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                  <Link prefetch={false} href={`/articles/${""}`}>
                                    <a className="color-white">
                                      <Image
                                        height={100}
                                        width={300}
                                        src={`https://strapi-production-15df.up.railway.app/uploads${post.image}`}
                                        alt="kk"
                                      />
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Instagram</h5>
                      </div>
                      <div className="instagram-gellay">
                        <ul className="insta-feed">
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-3.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-4.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-5.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-6.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default CaregoryList;

export async function getServerSideProps() {
  const result = await axios(
    `https://strapi-production-15df.up.railway.app/api/articles?&fields=title&populate=image_header`
  );
  const posts = result.data.data.map((item, i) => ({
    ...item.attributes,
    image: `${
      result.data.data[
        i
      ].attributes.image_header.data.attributes.formats.thumbnail.url.split(
        "/uploads"
      )[1]
    }`,
  }));

  return {
    props: {
      posts,
    },
  };
}
