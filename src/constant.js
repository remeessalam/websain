import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpeg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import {
  FaRobot,
  FaCogs,
  FaClipboardCheck,
  FaPaintBrush,
  FaGamepad,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  phone: "+91-9446965146",
  whatsapp: "+91-9715265678",
  email: "support@vkmtechnosolutions.com",
  address: "Plathottathil, Aryankavu P.O, Kollam, Kerala-691309",
  twitter: "",
  linkedin: "",
  instagram: "",
  facebook: "",
  // twitter: "https://x.com/VKMTechnoSoln",
  // linkedin: "https://www.linkedin.com/company/vkm-techno-solutions",
  // instagram: "https://www.instagram.com/vkmtechnosolutions/",
  // facebook: "https://www.facebook.com/profile.php?id=61566531176974",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    desc: "Your website is the digital face of your business. At VKM Techno Solutions, we specialize in crafting dynamic and responsive websites that drive digital transformation.",
    detailContent:
      "In the digital age, your website serves as the cornerstone of your business's online presence and often acts as the first point of interaction between you and your potential customers. As the face of your brand, your website plays a pivotal role in shaping perceptions, building trust, and driving conversions. At VKM Techno Solutions, we understand the significance of having a well-designed website that not only showcases your products or services but also aligns with your business goals and engages your audience effectively. \n\n Our expertise lies in developing websites that are responsive, scalable, and secure, ensuring exceptional performance across all devices and platforms. In a world where users access websites from a variety of devices—ranging from desktops and laptops to tablets and smartphones—having a responsive design is crucial. This adaptability enhances user experience by providing a consistent interface regardless of the device being used, which is essential in retaining visitors and encouraging them to explore further.\n\nAt VKM Techno Solutions, we tailor each web development project to meet the specific goals and needs of our clients. We recognize that every business is unique, and therefore, a one-size-fits-all approach simply won’t suffice. Whether you require a corporate website that effectively communicates your brand values or a dynamic web application that offers interactive features, our team collaborates closely with you to understand your vision. By leveraging our technical expertise and industry insights, we craft customized solutions that resonate with your target audience.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Achieve Mobile Supremacy through Custom App Development Solutions that Combine User- Centric Design, Seamless Functionality, and Sustainable Business Growth.",
    detailContent:
      "In today’s fast-paced digital landscape, mobile applications have become integral to how businesses interact with their customers and streamline their operations. Mobile app development is more than just creating an application; it is about crafting an engaging experience that enhances user interaction and drives business success. At VKM Techno Solutions, we specialize in developing high-performance mobile applications that cater to both Android and iOS platforms, ensuring that your business remains accessible and relevant in a mobile-driven world. \n\n The importance of mobile applications cannot be overstated. With a significant portion of internet traffic now coming from mobile devices, businesses must adapt to this shift by providing their services through easily accessible mobile applications. A well-designed app can significantly enhance user engagement, offering a seamless experience that keeps customers returning. This shift towards mobile solutions is not just a trend; it represents a fundamental change in consumer behavior, with users expecting businesses to meet them where they are—on their smartphones and tablets. \n\n At VKM Techno Solutions, our mobile app development process begins with understanding your specific needs and objectives. We believe that every business is unique, and a cookie-cutter approach will not yield the desired results. Our team conducts thorough market research and user analysis to comprehend your target audience's preferences and behaviors. This deep understanding allows us to design applications that resonate with users, making their interactions with your brand more meaningful and effective.",
  },
  {
    id: 3,
    title: "UI/UX",
    desc: "Create engaging user experiences with our expert UX/UI design services. We understand that a well-designed interface is crucial for user satisfaction and engagement.",
    detailContent:
      "In the realm of digital products, the importance of user experience (UX) and user interface (UI) design cannot be overstated. At VKM Techno Solutions, we understand that a well-crafted UI/UX is essential for creating engaging, intuitive, and efficient applications and websites that resonate with users. In an age where digital interactions define brand loyalty and customer satisfaction, investing in top-notch UI/UX design is not merely an option; it is a necessity for businesses looking to thrive in a competitive marketplace.\n\nUser experience encompasses all aspects of a user's interaction with a product, including the design, usability, accessibility, and overall satisfaction derived from that interaction. The goal of UX design is to create a seamless and enjoyable experience that meets users' needs and expectations. Our UX team conducts thorough research, including user interviews and surveys, to gain insights into user behavior, preferences, and pain points. By understanding the motivations and challenges faced by users, we are able to create solutions that enhance usability and foster positive interactions with your brand.\n\nConversely, user interface design focuses on the aesthetics and functionality of the product's interface. This includes everything from the layout and visual elements to the navigation and interactive features. A well-designed UI should not only be visually appealing but also intuitive, guiding users through the application or website in a logical manner. At VKM Techno Solutions, our design team combines creativity with a deep understanding of user behavior to craft interfaces that are not only attractive but also enhance usability and engagement.",
  },
  {
    id: 4,
    title: "Chatbots",
    desc: "Chatbots to Re-define Customer Interaction, Drive Revenue, and Future-Proof Your Business.",
    detailContent:
      "In today’s fast-paced digital landscape, businesses are continually seeking innovative ways to enhance customer engagement and streamline operations. At VKM Techno Solutions, we recognize the transformative potential of chatbot technology. Our chatbot development services empower organizations to leverage artificial intelligence to deliver real-time, personalized interactions that improve customer satisfaction while optimizing resource allocation.\n\nChatbots are sophisticated programs designed to simulate conversation with users. They can operate on various platforms, including websites, mobile apps, and social media channels, providing customers with immediate responses to their inquiries. This instant accessibility significantly enhances the user experience, allowing businesses to engage with their audience 24/7 without the constraints of traditional customer service hours. With chatbots, customers can obtain information, place orders, and receive support at any time, eliminating the frustration of long wait times and enhancing overall satisfaction.\n\nOne of the key benefits of implementing chatbots is their ability to handle a multitude of inquiries simultaneously. Unlike human agents, who can only assist one customer at a time, chatbots can interact with countless users concurrently. This scalability is particularly advantageous for businesses during peak times or promotional events when customer inquiries often surge. By automating routine tasks and frequently asked questions, chatbots free up human agents to focus on more complex issues, ultimately improving efficiency across the organization.",
  },
  {
    id: 5,
    title: "Machine Learning Solutions",
    desc: "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes.",
    detailContent:
      "In an era where data is often referred to as the new oil, businesses are increasingly recognizing the transformative potential of machine learning (ML) solutions. At VKM Techno Solutions, we specialize in harnessing the power of machine learning to help organizations turn vast amounts of data into actionable insights, enabling them to make informed decisions and stay competitive in a rapidly evolving landscape.\n\nMachine learning is a subset of artificial intelligence that empowers systems to learn from data, identify patterns, and make predictions without being explicitly programmed for specific tasks. This capability is particularly valuable in today’s data-driven world, where businesses generate an overwhelming amount of information daily. By utilizing machine learning algorithms, organizations can automate data analysis, uncover hidden trends, and derive insights that drive strategic decision-making.\n\nAt VKM Techno Solutions, our approach to machine learning begins with a comprehensive understanding of your business objectives and the specific challenges you face. We collaborate with you to identify the key data sources and develop tailored ML models that align with your strategic goals. This personalized approach ensures that the solutions we create are not only effective but also practical and relevant to your unique context.",
  },
  {
    id: 6,
    title: "Game Development",
    desc: "At VKM Techno Solutions, we specialize in game development, creating immersive and enjoyable gaming experiences.",
    detailContent:
      "Game development is an exciting and rapidly evolving field that blends creativity, technology, and storytelling to create immersive experiences for players. At VKM Techno Solutions, we understand the intricacies of game development and are passionate about bringing innovative gaming ideas to life. Our dedicated team of developers, designers, and artists work collaboratively to craft visually stunning, engaging, and interactive games that captivate audiences across various platforms.\n\n The game development process at VKM Techno Solutions begins with a comprehensive understanding of the client’s vision and target audience. We believe that successful games are built on solid concepts and engaging narratives. Our team collaborates closely with clients to brainstorm ideas, develop storylines, and create game mechanics that resonate with players. This collaborative approach ensures that the final product aligns with the client’s objectives while providing a rich and enjoyable experience for users.\n\n Once the concept is defined, our team moves into the design phase, where we focus on creating visually appealing graphics and user-friendly interfaces. Our artists employ cutting-edge design tools to create stunning visuals that draw players into the game world. Whether it’s character design, environment creation, or animation, we pay meticulous attention to detail to ensure that every element enhances the overall gaming experience. We also prioritize usability in our UI/UX design, making sure that players can navigate seamlessly and interact intuitively with the game",
  },
];

// about us page why choose content
// export const whyChooseUsContent = [
//   {
//     title: "Customized Solutions for Every Business",
//     desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
//   },
//   {
//     title: "Cutting-Edge Technology",
//     desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
//   },
//   {
//     title: "Security and Reliability",
//     desc: "At VKM Techno Solutions, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
//   },
//   {
//     title: "Long-Term Partnerships",
//     desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
//   },
//   {
//     title: "Agility and Innovation",
//     desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
//   },
// ];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

// new all services

export const landingPages = [
  {
    type: "Web Development",
    headline: "Build a Website that Makes an Impression",
    introParagraph:
      "A great website does more than look good – it needs to engage, inform, and convert. Our team at WEBSAIN builds websites that are visually striking, fast, and secure. We create platforms that are not only easy to navigate but are also optimized for search engines and designed to grow with your business. Whether it’s a custom brand site, e-commerce platform, or content hub, we’ll craft a site that reflects your brand and engages your audience.",
    shortDescription:
      "We build visually appealing, user-friendly, and search-optimized websites tailored to your brand and business growth.",
    keyFeatures: [
      "Custom Design & Development: Unique sites that align with your brand and goals.",
      "Responsive Layouts: Your website will look and function beautifully on any device.",
      "E-Commerce Integration: Seamless and secure shopping experiences.",
      "CMS Implementation: Simple content management for easy updates.",
    ],
    ctaButton: "Let’s Create Your Website",
  },
  {
    type: "App Development",
    headline: "Transform Concepts into Engaging Mobile Experiences",
    introParagraph:
      "Mobile isn’t just the future—it’s here and now. At WEBSAIN, we create mobile apps that help you connect with users and stand out in a crowded market. From iOS to Android or cross-platform, we build reliable, user-friendly apps that look great and perform even better. Let us bring your app vision to life with designs and features that people will love.",
    shortDescription:
      "We develop high-performance, user-friendly mobile apps for both iOS and Android that engage users and stand out in the market.",
    keyFeatures: [
      "Native & Cross-Platform Apps: High-performance apps for iOS, Android, and beyond.",
      "User-Friendly Design: Interfaces that are intuitive, clean, and engaging.",
      "Secure Back-End Integrations: Seamless connections with your systems for a smooth experience.",
      "Ongoing Support: We help you keep your app up-to-date and performing at its best.",
    ],
    ctaButton: "Let’s Talk Apps",
  },
  {
    type: "Game Development",
    headline: "Bring Your Game Ideas to Life",
    introParagraph:
      "Creating games is where creativity and technology come together. At WEBSAIN, we turn game concepts into unforgettable experiences. Whether you’re developing an indie game, VR adventure, or multiplayer world, our team combines storytelling, design, and technical skill to build interactive, engaging games that keep players coming back for more.",
    shortDescription:
      "We develop engaging and immersive games with innovative gameplay, storytelling, and cutting-edge technology for all platforms.",
    keyFeatures: [
      "2D & 3D Game Creation: Vivid graphics and smooth gameplay for any style.",
      "Unity & Unreal Engine Expertise: We use the best industry tools for top performance.",
      "Multi-Platform Compatibility: Games that run smoothly on PC, mobile, and consoles.",
      "AR & VR Integration: Innovative experiences that immerse players in new realities.",
    ],
    ctaButton: "Let’s Build Your Game",
  },
  {
    type: "UI/UX Design",
    headline: "Designing Seamless and Memorable User Experiences",
    introParagraph:
      "Good design isn’t just about looks – it’s about creating a journey that’s intuitive and enjoyable. Our UI/UX team goes beyond aesthetics to focus on how users actually interact with your product. By combining research, strategy, and creativity, we design user experiences that reflect your brand and make a lasting impact. Whether you need a design overhaul or are building from scratch, we’re here to make every click count.",
    shortDescription:
      "We create intuitive, user-friendly designs that enhance your brand and make every interaction memorable.",
    keyFeatures: [
      "User-Centered Research: Insights-driven design rooted in real user behavior.",
      "Wireframing & Prototyping: Visuals to help align on look and functionality before development.",
      "Responsive Design: A seamless experience, no matter what device users are on.",
      "Brand-Integrated Aesthetics: Designs that amplify your brand’s personality.",
    ],
    ctaButton: "Elevate Your User Experience",
  },
  {
    type: "Robotic Process Automation",
    headline: "Automate to Work Smarter, Not Harder",
    introParagraph:
      "Imagine freeing your team from repetitive tasks so they can focus on what matters most. That’s the power of RPA, and WEBSAIN is here to help. We design and implement automation solutions that streamline operations, reduce errors, and increase productivity. Our bots handle everything from data entry to complex workflows, allowing your business to run more efficiently and effectively.",
    shortDescription:
      "We implement RPA solutions that automate repetitive tasks, improve efficiency, and streamline business workflows.",
    keyFeatures: [
      "Customized Bots: Automation tailored to fit your processes perfectly.",
      "Detailed Workflow Analysis: Identifying the best places for automation to make the most impact.",
      "Scalable Solutions: Start small and expand as your needs grow.",
      "Secure System Integration: Bots that work seamlessly across platforms with strong data security.",
    ],
    ctaButton: "Streamline Your Operations",
  },
  {
    type: "ERP Solutions",
    headline: "Centralize Your Operations with ERP Solutions",
    introParagraph:
      "Running a business efficiently requires a unified approach. With WEBSAIN’s ERP solutions, you can bring all your key functions together under one system. From managing finances to tracking inventory, our ERP systems simplify processes and make data accessible so you can make better decisions, faster.",
    shortDescription:
      "Our ERP solutions unify your business functions, providing streamlined processes and real-time data for smarter decision-making.",
    keyFeatures: [
      "Customized ERP Systems: Solutions tailored to fit your exact business needs.",
      "Centralized Data: Real-time insights with data integrated across departments.",
      "Easy-to-Use Interfaces: Designed with user experience in mind for smooth adoption.",
      "Ongoing Support: We’re here to keep your ERP running efficiently as your business grows.",
    ],
    ctaButton: "Explore ERP Options",
  },
  {
    type: "AI Solutions",
    headline: "Unlock Insights and Efficiency with AI-Powered Solutions",
    introParagraph:
      "Imagine using data to forecast trends, automate decisions, and provide personalized customer experiences. WEBSAIN specializes in AI solutions that make this possible, helping your business harness advanced technology for meaningful insights and a competitive edge. From predictive analytics to natural language processing, our AI expertise turns your data into powerful, actionable intelligence.",
    shortDescription:
      "We provide AI solutions that leverage data for predictive insights, automation, and personalized experiences to drive efficiency.",
    keyFeatures: [
      "Machine Learning Models: Tailored to your data for insights that matter.",
      "Natural Language Processing: AI that understands and responds to human language.",
      "Computer Vision: Turn images and videos into valuable data with advanced recognition.",
      "Predictive Insights: Data-driven models that keep you a step ahead.",
    ],
    ctaButton: "Explore AI for Your Business",
  },
];

export const whyChooseUsContent = [
  {
    title: "AI-Powered Solutions",
    desc: "We create AI solutions that are not just smart, but practical. Whether it's streamlining operations, enhancing customer service, or analyzing big data, we ensure that AI adds real value to your business.",
    icon: FaRobot,
  },
  {
    title: "Tailored ERP Systems",
    desc: "Our ERP solutions are designed to support your business's growth and adaptability. We tailor each system to fit your specific requirements, ensuring a smooth implementation and seamless integration with your existing processes.",
    icon: FaCogs,
  },
  {
    title: "Automated Efficiency with RPA",
    desc: "We help you automate routine and time-consuming tasks with precision. By implementing RPA, we free up your team to work on higher-value tasks while enhancing operational efficiency and accuracy.",
    icon: FaClipboardCheck,
  },
  {
    title: "User-Centered UI/UX Design",
    desc: "We focus on understanding your users' needs, behaviors, and pain points to create designs that deliver results. From user interfaces to user journeys, we make sure that every design element serves a clear purpose, enhancing both usability and user satisfaction.",
    icon: FaPaintBrush,
  },
  {
    title: "Engaging and Innovative Game Development",
    desc: "Our team is passionate about building games that are fun, engaging, and innovative. With expertise in game mechanics, storytelling, and immersive technology, we help you create a unique gaming experience that stands out in a competitive market.",
    icon: FaGamepad,
  },
  {
    title: "User-Focused Mobile App Development",
    desc: "We work closely with you to understand your app's purpose and your audience. Our team builds apps that are not only functional but also intuitive, fast, and easy to use, ensuring a great user experience.",
    icon: FaMobileAlt,
  },
  {
    title: "Visually Appealing and Functional Websites",
    desc: "We don't just build websites; we build digital experiences. Our focus is on creating websites that are both visually appealing and highly functional, with the speed, security, and SEO capabilities your business needs to succeed.",
    icon: FaGlobe,
  },
];

export const testimonials = [
  {
    id: 1,
    profileImg: "profileImg1",
    name: "Sarah W.",
    role: "Marketing Director, BrightTech Solutions",
    desc: "“Working with WEBSAIN completely transformed our online presence. The new website they built for us is not only stunning but also incredibly functional. We’ve noticed a significant increase in traffic and customer engagement. Their team understood exactly what we needed and delivered beyond expectations.”",
  },
  {
    id: 2,
    profileImg: "profileImg2",
    name: "Tom R.",
    role: "CEO, Greenwave Consulting",
    desc: "“We approached WEBSAIN for a complete website redesign, and we couldn’t be happier with the outcome. Their process was smooth, the team was responsive, and they really understood our vision. The end result is a site that perfectly represents our brand and drives results.”",
  },
  {
    id: 3,
    profileImg: "profileImg3",
    name: "John M.",
    role: "Founder, EcoLife Apps",
    desc: "“The app developed by WEBSAIN has been a huge success for us. From concept to launch, the team was professional, communicative, and dedicated to bringing our vision to life. Our users love the new app, and we’re already seeing higher engagement and retention.”",
  },
  {
    id: 4,
    profileImg: "profileImg4",
    name: "Emily L.",
    role: "Product Manager, NextGen Solutions",
    desc: "“We were looking for a reliable development team to build a mobile app that would connect with our users, and WEBSAIN nailed it. The entire process, from design to deployment, was seamless, and the final product exceeded our expectations. We couldn’t be happier!”",
  },
  {
    id: 5,
    profileImg: "profileImg5",
    name: "David H.",
    role: "Lead Developer, Pixel Quest Games",
    desc: "“The team at WEBSAIN brought our game idea to life in ways we never imagined. They were incredibly creative and professional throughout the entire process. The final game is engaging, fun, and visually stunning. It’s been a joy working with them!”",
  },
  {
    id: 6,
    profileImg: "profileImg6",
    name: "Jessica F.",
    role: "CEO, Spark Gaming Studio",
    desc: "“Our game was a big risk, but the team at WEBSAIN took it on with confidence and skill. From the concept stage to launch, they were there every step of the way. The game is already getting great reviews and we’re seeing a strong following.”",
  },
  {
    id: 7,
    profileImg: "profileImg7",
    name: "Michael P.",
    role: "Head of Product, ComfyApp",
    desc: "“The UI/UX design work done by WEBSAIN completely redefined our app. They took our feedback seriously, and the result is a beautifully designed interface that’s also incredibly user-friendly. Our users now have a much smoother experience, and the feedback has been overwhelmingly positive.”",
  },
  {
    id: 8,
    profileImg: "profileImg8",
    name: "Rachel A.",
    role: "E-commerce Manager, StyleHub",
    desc: "“We knew we needed a design overhaul to improve conversion rates, and the team at WEBSAIN did an amazing job. They crafted a user journey that felt intuitive and seamless, which led to a noticeable improvement in user engagement. We couldn’t have asked for a better experience.”",
  },
  {
    id: 9,
    profileImg: "profileImg9",
    name: "Liam C.",
    role: "Operations Manager, GlobalTech Enterprises",
    desc: "“Thanks to WEBSAIN, we were able to automate several repetitive tasks that were taking up too much of our team’s time. Their RPA solution has streamlined our processes and improved efficiency across the board. It's been a great investment, and we’re already seeing a return.”",
  },
  {
    id: 10,
    profileImg: "profileImg10",
    name: "Sandra T.",
    role: "CFO, Future Financial Solutions",
    desc: "“Implementing RPA with WEBSAIN was a game-changer for us. Their team helped us identify the best processes to automate, and now we’re able to deliver services faster and with fewer errors. Their support throughout the entire implementation was excellent.”",
  },
  {
    id: 11,
    profileImg: "profileImg11",
    name: "Hank D.",
    role: "IT Director, Universal Manufacturing",
    desc: "“The ERP solution we implemented with WEBSAIN has helped us run our business more efficiently. They tailored the system to fit our needs and made the transition process smooth. The team was professional and incredibly knowledgeable throughout.”",
  },
  {
    id: 12,
    profileImg: "profileImg12",
    name: "Laura B.",
    role: "Operations Director, MedPro Healthcare",
    desc: "“We reached out to WEBSAIN for an ERP solution that could integrate all our systems into one platform, and they delivered exactly what we needed. Their team guided us through the entire process, and the result has been improved reporting and smoother operations.”",
  },
  {
    id: 13,
    profileImg: "profileImg13",
    name: "Omar J.",
    role: "Chief Marketing Officer, SmartRetail",
    desc: "“The AI-powered insights that WEBSAIN developed for us have been invaluable. Their solutions have given us a deeper understanding of our customer data, helping us refine our marketing strategies and improve our sales forecasts. We’re seeing real, measurable results.”",
  },
  {
    id: 14,
    profileImg: "profileImg14",
    name: "Sophia V.",
    role: "Customer Experience Lead, Global Communications",
    desc: "“We turned to WEBSAIN for an AI solution to automate our customer service, and the results have been outstanding. Their team developed an AI chatbot that handles inquiries seamlessly, improving response times and customer satisfaction.”",
  },
];
