import React from "react";
import blog6 from "../../assets/images/blogs/blog6.png";
import blog61 from "../../assets/images/blogs/blog61.png";
import { blogs } from "../../blogs";
import { Link, useLocation } from "react-router-dom";
const BlogPost6 = () => {
  const rpaFeatures = [
    {
      title: "Tailored Solutions for Every Business",
      description:
        "No two businesses are the same, and neither are their automation needs. WEBSAIN specializes in delivering customized RPA solutions that align perfectly with your specific goals and challenges. Whether you’re looking to optimize data entry processes, enhance customer service, or automate invoice processing, our team designs solutions that drive tangible results.",
    },
    {
      title: "Expertise Across Industries",
      description:
        "With experience spanning various industries, WEBSAIN has a deep understanding of diverse business workflows. From healthcare and finance to retail and logistics, our RPA solutions are engineered to address unique pain points and unlock new levels of efficiency.",
    },
    {
      title: "Seamless Integration with Existing Systems",
      description:
        "One of the biggest challenges businesses face with automation is ensuring compatibility with their current systems. At WEBSAIN, we excel in developing RPA solutions that integrate seamlessly with your existing software and tools, minimizing disruption and maximizing productivity.",
    },
    {
      title: "Cutting-Edge Technology and Innovation",
      description:
        "WEBSAIN stays ahead of the curve by leveraging the latest advancements in RPA technology. From intelligent bots that learn and adapt to advanced analytics for real-time monitoring, we equip your business with state-of-the-art tools that keep you competitive.",
    },
    {
      title: "Commitment to Growth and Impact",
      description:
        "Our mission goes beyond implementing automation; we aim to spark growth and create lasting impact for your business. By automating time-consuming tasks, WEBSAIN empowers your team to focus on strategic, high-value activities that drive innovation and customer satisfaction.",
    },
    {
      title: "Comprehensive Support and Training",
      description:
        "Adopting RPA is a journey, and WEBSAIN is with you every step of the way. From initial consultation and implementation to ongoing support and training, we ensure your team is fully equipped to leverage automation for long-term success.",
    },
  ];
  const location = useLocation();
  const currentPath = location.pathname;

  const filteredBlogs = blogs
    .filter((blog) => blog.path !== currentPath)
    .slice(0, 3);
  return (
    <div className="min-h-screen mt-[5rem] bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Why WEBSAIN is Your Ultimate Partner for Robotic Process Automation
          Solutions ?
        </h1>
        <div className="rounded-t-lg overflow-hidden py-[5rem]">
          <img src={blog6} alt="erpimg" className="w-full max-h-[50rem]" />
        </div>
        <div className="bg-black/30 p-6 rounded-lg">
          <p className="text-lg mb-6">
            In today’s fast-paced digital landscape, businesses are on a
            relentless quest to streamline operations, boost efficiency, and
            stay ahead of the competition. Enter Robotic Process Automation
            (RPA) – the game-changing technology that automates repetitive
            tasks, eliminates human errors, and frees up valuable resources for
            strategic initiatives. But when it comes to selecting the right
            partner for your RPA journey, one name stands out: WEBSAIN. At
            WEBSAIN, we don’t just provide tech solutions; we craft tailored
            strategies that revolutionize the way businesses operate. Here’s why
            WEBSAIN is the ideal partner for all your RPA needs.
          </p>
        </div>
      </section>

      {/* Features Circle Section */}

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {rpaFeatures.map((obj) => (
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Transform Your Business with WEBSAIN
        </h2>
        <div className="space-y-6">
          <p>
            Robotic Process Automation is more than just a trend; it’s a
            transformative force that redefines what’s possible in business
            operations. By partnering with WEBSAIN, you gain access to a team of
            creators, problem solvers, and strategists dedicated to helping your
            business thrive in the digital age. Ready to unlock the full
            potential of automation? Let’s build, innovate, and grow together.
            Contact WEBSAIN today and take the first step toward a smarter, more
            efficient future.
          </p>
        </div>
      </section>
      <div className="rounded-t-lg overflow-hidden py-[5rem]">
        <img
          src={blog61}
          alt="erpimg"
          className="w-full max-h-[50rem] object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Recommended Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className={`w-full h-48 ${
                  blog.id === 2 ? "object-contain" : "object-cover"
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
  );
};

export default BlogPost6;
