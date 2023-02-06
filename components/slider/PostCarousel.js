import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import { process } from "../../utils/slugify.js";

const PostCarousel = ({ posts }) => {
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
      <div className="carausel-post-1 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <Slider {...settings} className="slide-fade">
          {posts.slice(0, 2).map((item, i) => (
            <Link href={`/articles/${process(item.title)}`} key={`${process(item.title)}`}>
              <div className="position-relative post-thumb cursor-pointer">
                <div
                  className="thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: `url(https://strapi-production-15df.up.railway.app/uploads${item.image})`,
                  }}
                >
                  <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                    <div className="entry-meta meta-0 font-small mb-20">
                      <Link href={`/categories/${item.category}`}>
                        <a>
                          <span className="post-cat text-info">
                            {item.category}
                          </span>
                        </a>
                      </Link>
                    </div>
                    <h3 className="post-title font-weight-900 mb-20">
                      <Link href={`/articles/${process(item.title)}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                      <span className="post-on">{item.date}</span>
                      <span className="hit-count has-dot">
                        {item.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PostCarousel;
