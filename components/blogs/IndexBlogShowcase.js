import Link from "next/link";
import { process } from "../../utils/slugify";

function IndexBlogShowcase({ handleClick, posts }) {

  return (
    <>
      {posts.slice(0, 4).map((item, i) => (
        <article
          className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
          data-wow-delay="0.2s"
        >
          <div className="post-card-1 border-radius-10 hover-up">
            <div
              className="post-thumb thumb-overlay img-hover-slide position-relative"
              style={{
                backgroundImage: `url(https://strapi-production-15df.up.railway.app/uploads${item.image})`,
              }}
            >
              <Link className="img-link"  href={`/articles/${process(item.title)}`}>
                <a href="#"></a>
              </Link>
              <span className="top-right-icon bg-success">
                <i className="elegant-icon icon_camera_alt"></i>
              </span>
              <ul className="social-share">
                <li>
                  <Link href="#">
                    <a>
                      <i className="elegant-icon social_share"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="fb" title="Share on Facebook" target="_blank">
                      <i className="elegant-icon social_facebook"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="tw" target="_blank" title="Tweet now">
                      <i className="elegant-icon social_twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="pt" target="_blank" title="Pin it">
                      <i className="elegant-icon social_pinterest"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="post-content p-30">
              <div className="entry-meta meta-0 font-small mb-10">
                <Link href={`/category/${item.category}`}>
                  <a>
                    <span className="post-cat text-info">{item.category}</span>
                  </a>
                </Link>
              </div>
              <div className="d-flex post-card-content">
                <h5 className="post-title mb-20 font-weight-900">
                  <Link  href={`/articles/${process(item.title)}`}>
                    <a>{item.title}</a>
                  </Link>
                </h5>
                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                  <span className="post-on">{item.date}</span>
                  <span className="time-reading has-dot">
                    {item.readTime} mins read
                  </span>
                  <span className="post-by has-dot">{item.views} views</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default IndexBlogShowcase;
