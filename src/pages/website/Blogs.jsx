import React from "react";
import { blogsbanner } from "../../constant";
import { blogs } from "../../blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      {" "}
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={blogsbanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className={`w-full h-48 ${
                    blog.id === 2 ? `object-contain` : `object-cover`
                  }`}
                />
                <div className="p-6 min-h-[240px] flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link to={blog.path} className="primary-btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
