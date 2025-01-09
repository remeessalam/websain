import React from "react";
import erpimg from "../../assets/images/blogs/erpblog.png";
import graph from "../../assets/images/blogs/blog1graph.png";
import { blogs } from "../../blogs";
import { Link, useLocation } from "react-router-dom";
const BlogPost1 = () => {
  const erpFeatures = [
    {
      title: "Comprehensive Industry Expertise",
      description:
        "Our team of experts has a proven track record across diverse industries, from manufacturing to retail, healthcare to finance. We leverage this experience to design ERP solutions that address industry-specific challenges, providing you with tools to thrive in your niche.",
    },
    {
      title: "Custom-Built ERP Solutions",
      description:
        "Off-the-shelf solutions often fall short of meeting unique business demands. WEBSAIN creates custom ERP systems that integrate seamlessly with your existing processes. Whether you’re looking to optimize inventory management, streamline HR functions, or enhance financial reporting, our solutions are built with precision and purpose.",
    },
    {
      title: "Automation for Maximum Efficiency",
      description:
        "Repetitive tasks can drain resources and productivity. Our ERP solutions are designed to automate these tasks, freeing up your team to focus on strategic initiatives. From automated data entry to real-time reporting, WEBSAIN ensures every aspect of your workflow is optimized.",
    },
    {
      title: "Scalable and Future-Ready Systems",
      description:
        "Your business is constantly evolving, and your ERP system should too. WEBSAIN’s solutions are scalable, allowing you to add new features and capabilities as your needs grow. With future-ready technology, we help you stay ahead in a competitive market.",
    },
    {
      title: "Unmatched Support and Maintenance",
      description:
        "Technology is only as good as the support behind it. At WEBSAIN, we pride ourselves on providing ongoing maintenance and support to ensure your ERP system runs smoothly. Our team is always ready to troubleshoot issues and implement updates, so you can focus on growing your business.",
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
          Empowering Businesses with Seamless ERP Solutions: Why WEBSAIN is Your
          Ultimate Tech Partner?
        </h1>
        <div className="rounded-t-lg overflow-hidden">
          <img src={erpimg} alt="erpimg" className="w-full max-h-[50rem]" />
        </div>
        <div className="bg-black/30 p-6 rounded-b-lg">
          <p className="text-lg mb-6">
            In today's fast-paced business landscape, efficiency and innovation
            are the cornerstones of success. The ability to streamline
            operations, automate tasks, and make data-driven decisions can
            determine a company's trajectory. That's where WEBSAIN comes in. As
            a premier service provider platform, WEBSAIN specializes in
            delivering cutting-edge tech solutions, including robust Enterprise
            Resource Planning (ERP) systems that transform businesses from the
            ground up.
          </p>
        </div>
      </section>

      {/* Features Circle Section */}

      {/* Approach Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Why To Choose WEBSAIN for Your ERP Needs?
        </h2>
        <div className="space-y-6">
          <p>
            At WEBSAIN, we understand that every business is unique. That’s why
            we take a tailored approach to ERP solutions, ensuring they align
            with your specific requirements and objectives.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="wrapper py-12 ">
        <h2 className="text-3xl font-bold mb-8">
          Here's why WEBSAIN stands out as your go-to partner:
        </h2>
        <div className=" flex flex-col gap-5 !z-20 -mb-[40rem]">
          {erpFeatures.map((obj) => (
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
        <div className=" !-z-10">
          <img
            src={graph}
            alt="graph"
            className="w-full opacity-45 min-h-[50rem]"
          />
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          The WEBSAIN Approach: Bringing Ideas to Life{" "}
        </h2>
        <div className="space-y-6">
          <p>
            At WEBSAIN, we believe in more than just delivering solutions; we
            believe in building partnerships. Our process begins with
            understanding your goals, challenges, and aspirations. We
            collaborate closely with your team to design and implement ERP
            systems that not only meet your needs but also exceed your
            expectations.
            <br />
            <br />
            From web and mobile applications to sophisticated ERP platforms, we
            bring a holistic approach to every project. Our mission is to
            empower businesses with technology that sparks growth and drives
            impact.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Transform Your Business?{" "}
        </h2>
        <div className="space-y-6">
          <p>
            If you’re looking for an ERP solution that aligns with your vision
            and propels your business forward, look no further than WEBSAIN. Let
            us help you unlock new levels of efficiency and innovation with our
            expertly crafted tech solutions.
            <br />
            <br />
            Contact us today to learn how WEBSAIN can revolutionize your
            operations and set you on a path to success.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Recommended Blogs
          </h2>
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

export default BlogPost1;
