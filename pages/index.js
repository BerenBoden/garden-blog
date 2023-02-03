import Link from "next/link";
import Layout from "./../components/layout/layout";
import PostCarousel from "./../components/slider/PostCarousel";
import Image from "next/image";
import author from "../data/author.json";
import axios from "axios";
import IndexBlogShowcase from "../components/blogs/IndexBlogShowcase";
import IndexBlogFeatured from "../components/blogs/IndexBlogFeatured";
import IndexBlogFurther from "../components/blogs/IndexBlogFurther";
import IndexBlogPopular from "../components/blogs/IndexBlogPopular";
import Author from "../components/author/Author";

export async function getServerSideProps() {
  const result = await axios(
    "https://strapi-production-15df.up.railway.app/api/articles?fields=title&populate=image_header"
  );
  const posts = result.data.data.map((item, i) => ({
    ...item.attributes,
    image: `${
      result.data.data[
        i
      ].attributes.image_header.data.attributes.formats.medium.url.split(
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

function Home({ posts }) {

  return (
    <>
      <Layout>
        <main>
          <div className="featured-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <p className="text-muted">
                    <span
                      className="typewrite d-inline"
                      data-period="2000"
                      data-type='[ "Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                    ></span>
                  </p>
                  <h2>Welcome to my blog</h2>
                  <h5 className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit placeat maiores animi dolore blanditiis ratione illo
                    ad laboriosam perspiciatis error.
                  </h5>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="col-lg-4 h-25  d-none d-lg-block m-auto">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/imgs/authors/featured.png"
                    alt=""
                    href="#"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="pt-30 pb-30 font-small align-self-center">
              <div className="widget-header-3">
                <div className="row align-self-center">
                  <div className="col-md-4 align-self-center">
                    <h5 className="widget-title">Featured posts</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="loop-grid mb-30">
              <div className="row">
                <div className="col-lg-8 mb-30">
                  <PostCarousel posts={posts}/>
                </div>
                <IndexBlogShowcase posts={posts} />
              </div>
            </div>
          </div>
          <div className="bg-grey pt-50 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post-module-2">
                    <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                      <h5 className="mt-5 mb-30">Try our courses</h5>
                    </div>
                    <div className="loop-list loop-list-style-1">
                      <div className="row">
                        <IndexBlogFeatured posts={posts}/>
                      </div>
                    </div>
                  </div>
                  <div className="post-module-3">
                    <div className="widget-header-1 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Further reading</h5>
                    </div>
                    <div className="loop-list loop-list-style-1">
                      <IndexBlogFurther posts={posts} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget-area">
                    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                      <Author author={author}/>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Most popular</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          <IndexBlogPopular posts={posts}/>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Last comments</h5>
                      </div>
                      <div className="post-block-list post-module-2">
                        <ul className="list-post">
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/single">
                                  <a className="color-white">
                                    <img
                                      src="/assets/imgs/authors/author-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <Link href="/author">
                                    <a href="/author">
                                      <strong>David</strong>
                                    </a>
                                  </Link>
                                  <span className="ml-15 font-small text-muted has-dot">
                                    16 Jan 2020
                                  </span>
                                </p>
                                <p className="text-muted font-small">
                                  A writer is someone for whom writing is more
                                  difficult than...
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/single">
                                  <a className="color-white">
                                    <img
                                      src="/assets/imgs/authors/author-3.jpg"
                                      alt=""
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <Link href="/author">
                                    <a>
                                      <strong>Kokawa</strong>
                                    </a>
                                  </Link>
                                  <span className="ml-15 font-small text-muted has-dot">
                                    12 Feb 2020
                                  </span>
                                </p>
                                <p className="text-muted font-small">
                                  Striking pewter studded epaulettes silver zips
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/single">
                                  <a className="color-white">
                                    <Image
                                      src={`/assets/imgs/authors/author-1.jpg`}
                                      alt="post thumbnail"
                                      height={250}
                                      width={500}
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <Link href="/author">
                                    <a>
                                      <strong>Tsukasi</strong>
                                    </a>
                                  </Link>
                                  <span className="ml-15 font-small text-muted has-dot">
                                    18 May 2020
                                  </span>
                                </p>
                                <p className="text-muted font-small">
                                  Workwear bow detailing a slingback buckle
                                  strap
                                </p>
                              </div>
                            </div>
                          </li>
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
export default Home;
