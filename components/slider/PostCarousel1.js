import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";

const PostCarousel1 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const result = await axios("https://strapi-production-15df.up.railway.app/api/blogs?fields=title&populate=image_header");
        const posts = result.data.data.map((item, i) => ({
          ...item.attributes,
          image: `${result.data.data[i].attributes.image_header.data.attributes.formats.thumbnail.url.split('/uploads')[1]}`,
        }));
        setPosts(posts);
      }
      fetchData();
    }, []);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true,
    };
    return (
        <div>
            <div className="carausel-post-1 hover-up overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover"></div>
                <Slider {...settings} className="slide-fade">
                    {posts.slice(0, 2).map((item, i) => (
                        <div className="position-relative post-thumb">
                            <div
                                className="thumb-overlay img-hover-slide position-relative"
                                style={{
                                    backgroundImage: `url(https://strapi-production-15df.up.railway.app/uploads${item.image})`
                                }}
                            >

                                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                    <div className="entry-meta meta-0 font-small mb-20">
                                        <Link href={`/category/${item.category}`}>
                                            <a>
                                                <span className="post-cat text-info">
                                                    {item.category}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <h3 className="post-title font-weight-900 mb-20">
                                        <Link href={`/blog/${item.id}`}>
                                            <a>
                                                {item.title}
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                        <span className="post-on">
                                            {item.date}
                                        </span>
                                        <span className="hit-count has-dot">
                                            {item.views} Views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PostCarousel1;

