"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear the corresponding error when the input value changes
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };

    // Required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
      valid = false;
    } else if (!/^[+]?[\d\s]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Do not proceed if form validation fails
    }

    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (response.ok) {
        alert("We got your message! Sit back and relax. We will be in touch with you soon.");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#a6c5cf] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container w-full flex-col items-center justify-center px-4">
        <div className="-mx-4 flex w-full flex-col items-center justify-center">
          <div className="w-full px-4">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-6">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[800px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Ready to reclaim your time and turn your AirBnB into a
                  hands-off haven?
                </h2>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-4">
            <div
              className="wow fadeInUp max-w-[800px] rounded-xl bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Your Airbnb on Autopilot with BlueOne!
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-black dark:text-dark-8"
                  >
                    Full Name*
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="fullName"
                    placeholder="Saul Goodman"
                    className="w-full border-0 border-b border-[#424242] bg-transparent pb-3 text-dark placeholder:text-body-color/80 focus:border-primary focus:outline-none dark:border-dark-6 dark:text-white"
                  />
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-black dark:text-dark-8"
                  >
                    Email*
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#424242] bg-transparent pb-3 text-dark placeholder:text-body-color/80 focus:border-primary focus:outline-none dark:border-dark-6 dark:text-white"
                  />
                  <p className="text-red-500 text-sm">{errors.email}</p>
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-black dark:text-dark-8"
                  >
                    Phone*
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    placeholder="+441254521552"
                    className="w-full border-0 border-b border-[#424242] bg-transparent pb-3 text-dark placeholder:text-body-color/80 focus:border-primary focus:outline-none dark:border-dark-6 dark:text-white"
                  />
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-black dark:text-dark-8"
                  >
                    Message*
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full resize-none border-0 border-b border-[#424242] bg-transparent pb-3 text-dark placeholder:text-body-color/80 focus:border-primary focus:outline-none dark:border-dark-6 dark:text-white"
                  ></textarea>
                  <p className="text-red-500 text-sm">{errors.message}</p>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    { loading ? "Please Wait..." : "Earn Passively!" }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
