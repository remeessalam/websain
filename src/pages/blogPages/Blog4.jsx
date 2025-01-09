import React from "react";
import blog4 from "../../assets/images/blogs/blog4.png";
import { Link, useLocation } from "react-router-dom";
import { blogs } from "../../blogs";

const BlogPost4 = () => {
  const whychoose = [
    {
      title: "Tailored Solutions for Every Industry",
      description:
        "AI is not a one-size-fits-all solution, and we understand that every business has unique needs. At WEBSAIN, we excel in developing custom AI solutions that align with your specific goals and industry requirements. Whether you’re in healthcare, e-commerce, finance, or manufacturing, we craft AI strategies that deliver measurable results.",
    },
    {
      title: "End-to-End Expertise",
      description:
        "Our team brings a wealth of experience in AI technologies, from natural language processing and computer vision to predictive analytics and machine learning. We don’t just build AI systems; we ensure they integrate seamlessly with your existing infrastructure, providing a complete end-to-end solution.",
    },
    {
      title: "Innovation at the Core",
      description:
        "The world of AI evolves rapidly, and staying ahead requires a relentless focus on innovation. At WEBSAIN, we pride ourselves on adopting the latest advancements and methodologies to deliver cutting-edge AI services. From generative AI to advanced automation, we’re always ahead of the curve.",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "As your business grows, your AI needs will evolve. That’s why we design solutions that scale with you. Whether you’re a startup just beginning to explore AI or an established enterprise looking to expand your capabilities, WEBSAIN’s flexible approach ensures your success at every stage.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "What sets WEBSAIN apart is our unwavering commitment to excellence. We work closely with our clients, offering personalized support and actionable insights throughout every project. Our goal is not just to meet your expectations but to exceed them, delivering solutions that truly make a difference.",
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
          Empower Your Business with the Best: Why WEBSAIN Is Your Ideal Partner
          for AI Services
        </h1>
        <div className="bg-black/30 p-6 rounded-lg">
          <p className="text-lg mb-6">
            In today’s fast-paced digital world, Artificial Intelligence (AI)
            has become the driving force behind transformative business
            solutions. Whether it’s enhancing customer experiences, streamlining
            operations, or unlocking new growth opportunities, AI is reshaping
            industries and empowering businesses to achieve unprecedented
            success. If you’re searching for the perfect partner to help you
            harness the power of AI, look no further than WEBSAIN.
          </p>
        </div>
      </section>

      {/* Features Circle Section */}

      {/* Approach Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <div className="">
          <p>
            At WEBSAIN, we’re not just a tech company; we’re a collective of
            innovators, strategists, and problem-solvers committed to turning
            bold ideas into tangible results. With expertise spanning web and
            mobile applications, cutting-edge AI solutions, and automation, we
            specialize in delivering tailored services that drive impact and
            spark growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose WEBSAIN for AI Services?
        </h2>
        <div className="space-y-8">
          {whychoose.map((obj) => (
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
          Transform Your Vision with WEBSAIN{" "}
        </h2>
        <div className="space-y-6">
          <p>
            AI has the power to revolutionize how businesses operate, compete,
            and grow. But achieving its full potential requires the right
            partner—one who understands your vision, shares your commitment to
            success, and has the expertise to bring it to life. At WEBSAIN,
            we’re that partner. Let us help you unlock the transformative power
            of AI and take your business to new heights. From ideation to
            implementation, we’re here to ensure your journey into the world of
            AI is smooth, strategic, and successful.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started? </h2>
        <div className="space-y-6">
          <p>
            Discover the WEBSAIN difference today. Connect with us to explore
            how our AI services can empower your business and drive meaningful
            growth. With WEBSAIN, the future is now.
          </p>
        </div>
      </section>
      <div className="rounded-t-lg overflow-hidden">
        <img src={blog4} alt="erpimg" className="w-full max-h-[50rem]" />
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

export default BlogPost4;
