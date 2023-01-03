import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import { process } from "../../utils/slugify";
import axios from "axios";


const SingleVendor = ({ posts, postData }) => {
  const [data, setData] = useState(postData.data);

  return (
    <>
      <Layout>
        {data && (
          <>
            <main className="bg-grey pt-50 pb-50">
              <div className="pb-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="single-content2">
                        <div className="entry-header entry-header-style-1 mb-50 pt-50">
                          <h1 className="entry-title mb-50 font-weight-900">
                            {data[0].attributes.title}
                          </h1>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                <p className="mb-5">
                                  <Link href="/author">
                                    <a className="author-avatar" href="#">
                                      <img
                                        className="img-circle"
                                        src="/assets/imgs/authors/author-3.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </Link>
                                  By&nbsp;
                                  <Link href="/author">
                                    <a>
                                      <span className="author-name font-weight-bold">
                                        {data[0].attributes.author}
                                      </span>
                                    </a>
                                  </Link>
                                </p>
                                <span className="mr-10">{data.date}</span>
                                <span className="has-dot">
                                  {data.readTime} mins read
                                </span>
                              </div>
                            </div>
                            <div className="col-md-6 text-right d-none d-md-inline">
                              <ul className="header-social-network d-inline-block list-inline mr-15">
                                <li className="list-inline-item text-muted">
                                  <span>Share this: </span>
                                </li>
                                <li className="list-inline-item">
                                  <a
                                    className="social-icon fb text-xs-center"
                                    target="_blank"
                                    href="#"
                                  >
                                    <i className="elegant-icon social_facebook"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a
                                    className="social-icon tw text-xs-center"
                                    target="_blank"
                                    href="#"
                                  >
                                    <i className="elegant-icon social_twitter "></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a
                                    className="social-icon pt text-xs-center"
                                    target="_blank"
                                    href="#"
                                  >
                                    <i className="elegant-icon social_pinterest "></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <article>{data[0].attributes.content}</article>
                      </div>
                    </div>
                    <div className="col-lg-4 primary-sidebar sticky-sidebar">
                      <div className="widget-area">
                        <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                          <img
                            className="about-author-img mb-25"
                            src="/assets/imgs/authors/author.jpg"
                            alt=""
                          />
                          <h5 className="mb-20">Hello, I'm Steven</h5>
                          <p className="font-medium text-muted">
                            Hi, I’m Stenven, a Florida native, who left my
                            career in corporate wealth management six years ago
                            to embark on a summer of soul searching that would
                            change the course of my life forever.
                          </p>
                          <strong>Follow me: </strong>
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
                        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                          <div className="widget-header-2 position-relative mb-30">
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
                                  <Link href={`/articles/${""}`}>
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
                        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                          <div className="widget-header-2 position-relative mb-30">
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
                                        <a>
                                          <strong>David</strong>
                                        </a>
                                      </Link>
                                      <span className="ml-15 font-small text-muted has-dot">
                                        16 Jan 2020
                                      </span>
                                    </p>
                                    <p className="text-muted font-small">
                                      A writer is someone for whom writing is
                                      more difficult than...
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
                                      Striking pewter studded epaulettes silver
                                      zips
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="wow fadeInUp animated">
                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                    <Link href="/single">
                                      <a className="color-white">
                                        <img
                                          src="/assets/imgs/news/thumb-1.jpg"
                                          alt=""
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
                          <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Instagram</h5>
                          </div>
                          <div className="instagram-gellay">
                            <ul className="insta-feed">
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-3.jpg"
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
                              </li>
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-4.jpg"
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
                              </li>
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-5.jpg"
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
                              </li>
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-3.jpg"
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
                              </li>
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-4.jpg"
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
                              </li>
                              <li>
                                <a
                                  href="assets/imgs/thumbnail-5.jpg"
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
          </>
        )}
      </Layout>
    </>
  );
};

export default SingleVendor;

export async function getServerSideProps(context) {
  
  try {
  const pathParts = context.req.url.split('/');
  const extractedPath = `${pathParts[5]}`;
  // Get the title from the last part of the path
  const title = pathParts[pathParts.length - 1].split('.')[0];
  const postData = await axios.get(
    `https://strapi-production-15df.up.railway.app/api/blogs?filters[slug][$eqi]=${title}`
  );
  const result = await axios(
    `https://strapi-production-15df.up.railway.app/api/blogs?&fields=title&populate=image_header`
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
      postData: postData.data,
      posts
    },
  };
  }catch(err){
    console.log('error:', err);
  }

}
