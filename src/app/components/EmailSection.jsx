"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const data = { email, subject, message };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSONdata,
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setTimeout(() => setEmailSubmitted(false), 5000);
        toast.success("Message sent successfully! 🎉", {
          description: "I'll get back to you soon.",
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message");
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message. Please try again.");
      setFormError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Background glow */}
      <div
        className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stools))] 
   from-primary-900 to-transparent rounded-full 
   h-80 w-80 z-0 blur-lg 
   absolute top-1/3 left-0 
   transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Left Side */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll reply as soon as I can!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Deepakk2104">
            <Image src={GithubIcon} alt="GitHub" aria-label="GitHub profile" />
          </Link>
          <Link href="https://www.linkedin.com/in/deepakk2104/">
            <Image src={LinkedinIcon} alt="LinkedIn" aria-label="LinkedIn profile" />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - FORM + SUCCESS MESSAGE */}
      <div className="min-h-[300px] flex items-start">
        {" "}
        {emailSubmitted ? (
          <div
            className="bg-[#18191E] border border-[#33353F] rounded-lg p-6 
            text-center w-full text-green-400 text-lg shadow-lg"
          >
            <p>Your message was sent successfully! 🎉</p>
            <p className="text-sm text-gray-400 mt-2">
              I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            {formError && (
              <div
                className="bg-[#2a2d34] border border-red-500/20 rounded-lg p-4 mb-6 text-red-400 text-sm animate-bounce"
              >
                {formError}
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg 
                block w-full p-2.5"
                placeholder="jacob@google.com"
                aria-describedby="email-error"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg 
                block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg 
                block w-full p-2.5"
                placeholder="Let's talk about..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white 
              font-medium py-2.5 px-5 rounded-lg w-full transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary-400"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;