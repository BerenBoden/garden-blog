import Link from 'next/link'

function Author({author}) {
  return (
    <>{author.slice(0, 1).map((item, i) => (
        <>
          <img
            className="about-author-img mb-25"
            src={`/assets/imgs/authors/${item.img}`}
            alt=""
          />
          <h5 className="mb-20">Hello, I'm {item.title}</h5>
          <p className="font-medium text-muted">{item.desc}</p>
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
        </>
      ))}</>
  )
}

export default Author