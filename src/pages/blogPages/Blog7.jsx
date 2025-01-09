import React from "react";
import blog7 from "../../assets/images/blogs/blog7.png";
import blog72 from "../../assets/images/blogs/blog72.png";
import blog73 from "../../assets/images/blogs/blog73.png";
import { blogs } from "../../blogs";
import { Link, useLocation } from "react-router-dom";
const BlogPost7 = () => {
  const uiux = [
    {
      title: "We Design with Your Users in Mind",
      description:
        "We believe great design starts with understanding the people who will use it. At WebSain, we dig deep into your audience’s needs, behaviors, and expectations. By blending this research with creativity, we create designs that not only attract attention but also deliver an experience your users will love and remember.",
    },
    {
      title: "From Concept to Completion",
      description:
        "WebSain is with you every step of the way. Whether it’s sketching initial ideas, building interactive prototypes, or refining the final product, we handle the entire design process. Our team’s expertise ensures nothing gets overlooked, and the result is always a polished, functional, and user-friendly product.",
    },
    {
      title: "Proven Success Across Industries",
      description:
        "We’ve worked with startups, established businesses, and everything in between, helping them transform their digital presence. From dynamic e-commerce platforms to intuitive mobile apps, our designs are tailored to drive results and leave a lasting impact.",
    },
    {
      title: "Tailored Solutions for Your Business",
      description:
        "Your business is unique, and your design should reflect that. At WebSain, we don’t do cookie-cutter solutions. Instead, we take the time to understand your brand’s personality, values, and goals, crafting designs that amplify your identity and connect with your audience.",
    },
    {
      title: "Always Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and so are we. At WebSain, we leverage the latest design trends, tools, and technologies to keep your product fresh and competitive. Whether it’s responsive design, accessibility, or innovative interactions, we’ve got it covered.",
    },
    {
      title: "We’re in This Together",
      description:
        "We see our clients as partners, not projects. Collaboration is key to creating something extraordinary, and we keep you involved throughout the process. From brainstorming sessions to progress updates, we ensure you’re always in the loop and confident in the direction we’re heading.",
    },
    {
      title: "Results That Matter",
      description:
        "At the end of the day, design isn’t just about looking good—it’s about driving results. Whether it’s increasing user engagement, improving conversion rates, or strengthening customer loyalty, WebSain’s designs deliver tangible business outcomes.",
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
          <img src={blog7} alt="erpimg" className="w-full max-h-[50rem]" />
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
        <div className="rounded-t-lg overflow-hidden py-[5rem]">
          <img src={blog73} alt="erpimg" className="w-full max-h-[50rem]" />
        </div>
        <div className="space-y-8">
          {uiux.map((obj) => (
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
          src={blog72}
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

export default BlogPost7;
