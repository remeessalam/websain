import React from "react";
import gameimg from "../../assets/images/blogs/blog3game.png";
import { Link, useLocation } from "react-router-dom";
import { blogs } from "../../blogs";
const BlogPost3 = () => {
  const gameDevelopmentFeatures = [
    // {
    //   title:
    //     "Level Up Your Gaming Vision: Why WEBSAIN Is Your Ultimate Game Development Partner",
    //   description:
    //     "In the dynamic and ever-evolving world of gaming, turning a brilliant idea into an immersive experience requires more than just technical expertise. It demands a partner who understands your vision, collaborates seamlessly, and delivers cutting-edge solutions that captivate players.",
    // },
    {
      title: "Expertise Across Game Development Platforms",
      description:
        "At WEBSAIN, we specialize in developing games for a wide array of platforms, including PC, mobile, console, and VR/AR environments. Whether it’s a casual mobile game or a complex multi-platform masterpiece, our team of experienced developers is equipped to bring your vision to life. We stay at the forefront of gaming trends and technologies, ensuring that your game is not just relevant but also innovative.",
    },
    {
      title: "Tailored Solutions for Unique Gaming Experiences",
      description:
        "No two games are the same, and neither are their development journeys. WEBSAIN’s approach is deeply rooted in customization. We work closely with you to understand your goals, target audience, and creative aspirations. From designing immersive storylines and stunning visuals to integrating advanced AI and multiplayer capabilities, we craft bespoke solutions that resonate with players and align with your vision.",
    },
    {
      title: "Seamless Integration of Cutting-Edge Technologies",
      description:
        "Gaming is a realm where technology meets imagination. WEBSAIN excels at leveraging the latest tools and frameworks to deliver high-performance games. Our expertise includes Unreal Engine, Unity, and other leading platforms, as well as the integration of AI, machine learning, and real-time rendering. The result? Games that are visually stunning, highly interactive, and technically robust.",
    },
    {
      title: "End-to-End Support",
      description:
        "Game development is a multifaceted process, and WEBSAIN offers comprehensive support at every stage. From conceptualization and prototyping to development, testing, and post-launch updates, our team is with you every step of the way. Our agile development methodology ensures that your project remains on track, on budget, and aligned with your expectations.",
    },
    {
      title: "Commitment to Quality and Innovation",
      description:
        "At WEBSAIN, quality isn’t just a goal – it’s a guarantee. Our rigorous testing protocols ensure that your game is free from bugs, glitches, and performance issues. More importantly, we’re constantly pushing the boundaries of innovation, delivering features and functionalities that set your game apart in a crowded market.",
    },
  ];
  const additionalFeatures = [
    {
      title: "Creative Collaboration",
      description:
        "We’re more than developers; we’re your creative partners, committed to bringing your unique vision to life.",
    },
    {
      title: "Technical Excellence",
      description:
        "Our team combines deep technical knowledge with a passion for gaming, ensuring top-notch results.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you’re an indie developer or a large-scale studio, we tailor our services to meet your specific needs.",
    },
    {
      title: "On-Time Delivery",
      description:
        "We understand the importance of deadlines and deliver high-quality projects on schedule.",
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
          Level Up Your Gaming Vision: Why WEBSAIN Is Your Ultimate Game
          Development Partner
        </h1>
        <div className="bg-black/30 p-6 rounded-lg">
          <p className="text-lg mb-6">
            In the dynamic and ever-evolving world of gaming, turning a
            brilliant idea into an immersive experience requires more than just
            technical expertise. It demands a partner who understands your
            vision, collaborates seamlessly, and delivers cutting-edge solutions
            that captivate players.
            <br />
            Enter WEBSAIN – a service provider platform renowned for its
            unparalleled tech services, including game development. Here’s why
            WEBSAIN stands out as the best partner for your next game
            development project.
          </p>
        </div>
      </section>

      {/* Features Circle Section */}

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        {/* <h2 className="text-3xl font-bold mb-8">
          Here's why WEBSAIN stands out as your go-to partner:
        </h2> */}
        <div className="space-y-8">
          {gameDevelopmentFeatures.map((obj) => (
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose WEBSAIN for Game Development?{" "}
        </h2>
        <div className="space-y-8">
          {additionalFeatures.map((obj) => (
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
          Let’s Build the Future of Gaming Together{" "}
        </h2>
        <div className="space-y-6">
          <p>
            Gaming is more than entertainment; it’s an experience that connects
            people across the globe. At WEBSAIN, we’re dedicated to creating
            games that inspire, engage, and leave a lasting impact. Ready to
            turn your gaming dream into reality? Let’s collaborate and redefine
            what’s possible in the world of gaming. Reach out to us today, and
            let’s start crafting your next big hit.
          </p>
        </div>
      </section>
      <div className="rounded-t-lg overflow-hidden">
        <img
          src={gameimg}
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

export default BlogPost3;
