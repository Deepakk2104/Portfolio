"use client";

import React, { useState } from "react";
import Sonner from "sonner";
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
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      setFormError(error.message);
      Sonner.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <Sonner />

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
              {formError?.includes("email") && (
                <p id="email-error" className="text-red-400 text-xs mt-1">
                  Please enter a valid email address.
                </p>
              )}
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
              {isSubmitting ? (
                <>
                  <span className="flex items-center justify-center">Sending...</span>
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
