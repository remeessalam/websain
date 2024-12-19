import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import toast from "react-hot-toast";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "New Contact Form Submission - WEBSAIN",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="wrapper py-[5rem] grid lg:grid-cols-[45%_auto] gap-7">
      <div
        data-aos="fade-right"
        className="bg-gradient-to-r flex flex-col gap-2 text-white from-secondary/20 to-primary/20 p-4 rounded-xl"
      >
        <div className="gradient-rounded-text-box">Book an Appointment</div>
        <h2 className="heading-2 mt-5">Get in Touch</h2>
        <p className="desc">
          We’d love to connect with you and discuss how we can support your
          business growth. Reach out to us today, and let’s talk about bringing
          your vision to life.
        </p>
        <Link
          to={`tel:${companyDetails.phone}`}
          className="flex items-start gap-3 w-fit mt-5"
        >
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
            <FaPhone className="text-2xl scale-x-[-1]" />
          </div>
          <div className="flex flex-col h-full">
            <p className="font-medium">INDIA</p>
            <p className="desc">{companyDetails.phone}</p>
          </div>
        </Link>
        <Link
          to={`tel:${companyDetails.uaephone}`}
          className="flex items-start gap-3 w-fit mt-5"
        >
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
            <FaPhone className="text-2xl scale-x-[-1]" />
          </div>
          <div className="flex flex-col h-full">
            <p className="font-medium">UAE</p>
            <p className="desc">{companyDetails.uaephone}</p>
          </div>
        </Link>
        <Link
          to={`tel:${companyDetails.qatarphone}`}
          className="flex items-start gap-3 w-fit mt-5"
        >
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
            <FaPhone className="text-2xl scale-x-[-1]" />
          </div>
          <div className="flex flex-col h-full">
            <p className="font-medium">QATAR</p>
            <p className="desc">{companyDetails.qatarphone}</p>
          </div>
        </Link>
        <Link
          to={`mailto:${companyDetails.email}`}
          className="flex items-start gap-3 w-fit mt-5"
        >
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
            <IoMail className="text-3xl scale-x-[-1]" />
          </div>
          <div className="flex flex-col h-full">
            <p className="font-medium">Email</p>
            <p className="desc">{companyDetails.email}</p>
          </div>
        </Link>
        <div className="flex items-start gap-3 w-fit mt-5">
          <div className="min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
            <FaLocationDot className="text-2xl scale-x-[-1]" />
          </div>
          <div className="flex flex-col h-full">
            <p className="font-medium">Location</p>
            <p className="desc max-w-[20rem]">{companyDetails.address}</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="h-full flex flex-col justify-between gap-7"
      >
        <div className="p-[1px] text-white h-full bg-gray-400 rounded-lg">
          <div className="rounded-lg h-full bg-[#101010] p-4">
            <h3 className="text-lg">Have Any Question?</h3>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4 mt-5"
            >
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className="border-primary p-2 rounded-md border outline-none bg-transparent"
                  placeholder="Name"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <small className="text-red-400">{errors.name?.message}</small>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="text-red-400">
                    {errors.email?.message}
                  </small>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="tel"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  <small className="text-red-400">
                    {errors.phone?.message}
                  </small>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <textarea
                  rows="4"
                  className="border-primary p-2 rounded-md border outline-none bg-transparent"
                  placeholder="Message"
                  {...register("message", {
                    required: "Message is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Message is required";
                      }
                    },
                  })}
                />
                <small className="text-red-400">
                  {errors.message?.message}
                </small>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="tertiary-btn mt-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-5 items-center text-white mb-1">
          <p>Follow Us On:</p>
          <div className="flex items-center gap-3">
            <Link
              to={companyDetails.facebook}
              rel="noopener noreferrer"
              target="_blank"
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsFacebook className="text-xl text-white group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link
              to={companyDetails.twitter}
              rel="noopener noreferrer"
              target="_blank"
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsTwitter className="text-xl text-white group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link
              to={companyDetails.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsLinkedin className="text-xl text-white group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link
              to={companyDetails.instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsInstagram className="text-xl text-white group-hover:text-primary transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
