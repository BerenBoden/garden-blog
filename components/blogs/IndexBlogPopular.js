import Link from "next/link"
import Image from 'next/image'
import {process} from '../../utils/slugify'

function IndexBlogPopular({posts}) {
  return (
    <>{posts.slice(0, 2).map((item, i) => (
        <li className="mb-30 wow fadeInUp animated">
          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
            <div className="post-content media-body">
              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                <Link href={`/blog/${process(item.title)}`}>
                  <a>{item.title}</a>
                </Link>
              </h6>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{item.date}</span>
                <span className="post-by has-dot">
                  {item.views} views
                </span>
              </div>
            </div>
            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
              <Link href={`/blog/${process(item.title)}`}>
                <a className="color-white">
                  <Image
                    src={`https://strapi-production-15df.up.railway.app/uploads${item.image}`}
                    height={250}
                    width={250}
                    alt="post"
                  />
                </a>
              </Link>
            </div>
          </div>
        </li>
      ))}</>
  )
}

export default IndexBlogPopular