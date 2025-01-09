import React from "react";
import blog5 from "../../assets/images/blogs/blog5.png";
import { blogs } from "../../blogs";
import { Link, useLocation } from "react-router-dom";
const BlogPost5 = () => {
  const appDevelopmentFeatures = [
    {
      title: "Expertise Across Industries",
      desc: "WEBSAIN brings years of experience in delivering innovative tech solutions for a diverse range of industries. From e-commerce and healthcare to education and fintech, our team understands the unique challenges and opportunities within your sector. This cross-industry expertise enables us to craft tailor-made apps that align perfectly with your business goals.",
    },
    {
      title: "End-to-End Development Services",
      desc: "At WEBSAIN, we don’t just build apps – we create comprehensive solutions. Our services cover every stage of the app development lifecycle, including: ",
      details: [
        {
          title: "Ideation and Strategy",
          desc: "Collaborate with our strategists to refine your app concept.",
        },
        {
          title: "UI/UX Design",
          desc: "Engage users with visually appealing and intuitive interfaces.",
        },
        {
          title: "Development",
          desc: "Leverage the latest technologies to ensure high performance and scalability.",
        },
        {
          title: "Testing and QA",
          desc: "Deliver bug-free solutions with rigorous quality checks.",
        },
        {
          title: "Deployment and Maintenance",
          desc: "Ensure a seamless launch and continuous app improvement.",
        },
      ],
    },
    {
      title: "Cutting-Edge Technology",
      desc: "We pride ourselves on staying ahead of the curve. WEBSAIN employs the most advanced tools and technologies to deliver apps that are not just functional but future-ready. Whether it’s integrating AI and machine learning, implementing AR/VR features, or ensuring seamless cloud integration, our solutions are built for innovation.",
    },
    {
      title: "Customization and Scalability",
      desc: "No two businesses are the same, and neither are their tech needs. At WEBSAIN, we take a personalized approach to app development. From the smallest feature to the overarching architecture, every aspect of your app is designed to meet your specific requirements. Plus, our solutions are built with scalability in mind, ensuring your app can grow alongside your business.",
    },
    {
      title: "Commitment to Quality and Timely Delivery",
      desc: "Time is of the essence in the digital world. That’s why we prioritize efficiency without compromising on quality. With a streamlined development process and a dedicated team, WEBSAIN ensures that your app is delivered on time, every time.",
    },
    {
      title: "A Partnership Beyond Development",
      desc: "Choosing WEBSAIN is more than hiring a service provider – it’s forging a partnership. We’re invested in your success and are committed to supporting you at every step, from initial consultation to post-launch updates and optimizations.",
    },
    {
      title: "Real-World Success Stories",
      desc: "Still wondering why WEBSAIN is the right choice? Our portfolio speaks for itself. We’ve helped businesses across the globe turn ideas into impactful apps that drive growth and engagement. From streamlining internal processes to creating standout customer experiences, our solutions deliver measurable results.",
    },
    {
      title: "Conclusion",
      desc: "When it comes to app development, you need more than just a vendor – you need a partner who understands your vision, shares your passion, and has the expertise to bring your ideas to life. With WEBSAIN, you get all that and more. Let us help you create an app that not only meets your needs but exceeds your expectations. Ready to transform your idea into reality? Contact WEBSAIN today and take the first step towards a smarter, more connected future.",
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
          WEBSAIN is Your Ultimate Partner for App Development
        </h1>
        <div className="bg-black/30 p-6 rounded-lg">
          <p className="text-lg mb-6">
            In today’s fast-paced digital landscape, having a robust,
            user-friendly, and scalable app is no longer a luxury – it’s a
            necessity. Whether you’re a startup looking to disrupt the market or
            an established business aiming to enhance customer engagement, the
            right tech partner can make all the difference. Enter WEBSAIN – a
            platform that transforms your vision into powerful digital
            solutions. Here’s why WEBSAIN should be your first choice for app
            development.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {appDevelopmentFeatures.map((obj) => (
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{obj.title}</h3>
              <p>{obj.desc}</p>
              {obj.details?.map((obj) => (
                <div>
                  <h3>{obj.title}</h3>
                  <p>{obj.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-t-lg overflow-hidden">
        <img src={blog5} alt="erpimg" className="w-full max-h-[50rem]" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Recommended Blogs</h2>
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

export default BlogPost5;
