"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

   
  };

  return (
    <div className="w-full min-h-screen bg-[#f3e9dd] px-6 py-20 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10">Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md border border-[#e5dfd3]"
      >
       
        <label className="block mb-4">
          <span className="text-lg font-medium">Your Name</span>
          <input
            type="text"
            required
            className="mt-2 w-full p-3 border rounded-lg bg-[#faf7f2]"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium">Your Email</span>
          <input
            type="email"
            required
            className="mt-2 w-full p-3 border rounded-lg bg-[#faf7f2]"
          />
        </label>

     
        <label className="block mb-4">
          <span className="text-lg font-medium">Subject</span>
          <input
            type="text"
            required
            className="mt-2 w-full p-3 border rounded-lg bg-[#faf7f2]"
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg font-medium">Message</span>
          <textarea
            required
            rows={5}
            className="mt-2 w-full p-3 border rounded-lg bg-[#faf7f2]"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-[#b7e4c7] border-2 border-white rounded-xl text-lg font-semibold hover:opacity-90"
        >
          Send Message
        </button>

  
        {submitted && (
          <p className="mt-4 text-green-700 font-medium">
            Your message has been sent (not really, but the button works)!
          </p>
        )}
      </form>
    </div>
  );
}
