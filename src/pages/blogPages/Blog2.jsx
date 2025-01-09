import React from "react";
import blog2 from "../../assets/images/blogs/blog2.png";
import { Link, useLocation } from "react-router-dom";
import { blogs } from "../../blogs";
// import blog3 from "../../assets/images/blogs/blog21.png";
const BlogPost2 = () => {
  const webDevelopmentFeatures = [
    {
      title: "Tremendous Expertise in Web Development",
      description:
        "At Websain, web development is more than just writing code. We focus on crafting customized, user-centric websites tailored to your specific business needs. From sleek, modern designs to highly functional e-commerce platforms, our team of experts has experience in:",
      details: [
        {
          title: "frontendDevelopment",
          desc: "Creating intuitive and visually appealing interfaces using the latest technologies like React, Angular, and Vue.js.",
        },
        {
          title: "backendDevelopment",
          desc: "Building secure, scalable, and efficient systems with technologies such as Node.js, Python, Ruby on Rails, and PHP.",
        },
        {
          title: "fullStackSolutions",
          desc: "Providing seamless integration between frontend and backend for a cohesive user experience.",
        },
        {
          title: "cmsDevelopment",
          desc: "Delivering flexible and user-friendly content management systems such as Joomla.",
        },
      ],
    },
    {
      title: "Tailored Solutions for Every Business",
      description:
        "No two businesses are alike, and Websain understands this. We start by getting to know your brand, goals, and target audience. This personalized approach allows us to design and develop websites that not only look stunning but also align perfectly with your business objectives. Whether you’re looking for a simple informational site or a complex enterprise solution, we’ve got you covered.",
    },
    {
      title: "Focus on Performance and SEO",
      description:
        "A visually impressive website is only effective if it performs well and ranks high in search engines. Websain prioritizes speed, responsiveness, and search engine optimization (SEO) in every project.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Web development trends evolve rapidly, and staying ahead requires constant learning and adaptation. Websain stays at the forefront of technology, leveraging tools like AI, cloud computing, and progressive web apps (PWAs) to build future-ready websites. By partnering with us, you gain access to the latest advancements in web development.",
    },
    {
      title: "Affordable Pricing Without Compromising Quality",
      description:
        "Budget constraints shouldn’t limit your access to high-quality web development services. At Websain, we offer flexible pricing models to accommodate businesses of all sizes. Our transparent pricing ensures you get exceptional value for your investment.",
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Building a website is just the beginning. Websain is committed to supporting you every step of the way, from initial consultation to maintenance. Our dedicated customer support team is always ready to address your queries and provide timely solutions to keep your website running smoothly.",
    },
    {
      title: "Proven Track Record",
      description:
        "Over the years, Websain has successfully delivered numerous web development projects across various industries. Our portfolio speaks for itself, showcasing innovative designs and impactful solutions that have helped our clients achieve their goals.",
    },
    {
      title: "Collaboration and Transparency",
      description:
        "At Websain, we believe in building lasting relationships with our clients. Our collaborative approach ensures you are involved in every stage of the project, from brainstorming to deployment. Regular updates and open communication foster trust and transparency, making the entire process smooth and stress-free.",
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
        <div className="rounded-t-lg overflow-hidden">
          <img src={blog2} alt="erpimg" className="w-full max-h-[50rem]" />
        </div>
        <div className="bg-black/30 p-6 rounded-lg">
          <p className="text-lg mb-6">
            In the current digital era, maintaining a strong online presence is
            essential, not merely a choice. Regardless of the size of your
            company—small, startup, or established—your website frequently
            serves as the initial point of contact between your brand and
            potential clients. Selecting the ideal partner to develop or improve
            your online presence can have a significant impact. Let me introduce
            you to Websain, a reputable platform for service providers that
            focuses in offering excellent tech services, such as web hosting.
            Web Stain is the perfect partner for your web development needs for
            the following reasons.
          </p>
        </div>
      </section>

      {/* Features Circle Section */}

      {/* Approach Section */}
      {/* <section className="container mx-auto px-4 py-12">
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
      </section> */}

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        {/* <h2 className="text-3xl font-bold mb-8">
          Here's why WEBSAIN stands out as your go-to partner:
        </h2> */}
        <div className="space-y-8">
          {webDevelopmentFeatures.map((obj) => (
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{obj.title}</h3>
              <p>{obj.description}</p>
              {obj.details?.map((obj) => (
                <div className="mt-2">
                  <h3 className="font-medium underline underline-offset-4 list-disc">
                    {obj.title}:
                  </h3>
                  <p>{obj.desc}</p>{" "}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* <div className="rounded-t-lg overflow-hidden">
        <img src={blog3} alt="erpimg" className="w-full max-h-[50rem]" />
      </div> */}
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Conclusion</h2>
        <div className="space-y-6">
          <p>
            When it comes to web development, Websain stands out as a reliable
            and innovative partner. Our blend of technical expertise,
            customer-centric approach, and commitment to excellence ensures your
            website will not only meet but exceed expectations. By choosing Web
            Stain, you’re not just investing in a website; you’re investing in
            the future success of your business.
            <br />
            <br />
            Ready to transform your digital presence? Get in touch with Websain
            today and let’s create something extraordinary together!
          </p>
        </div>
      </section>
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

export default BlogPost2;
