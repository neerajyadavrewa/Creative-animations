"use client"
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    // Handle form submission logic here (e.g., send to a backend)
  };

  return (
    <div className="min-h-screen bg-black/[0.96] antialised ">
   
     
        <div className="flex flex-col justify-center items-center w-full h-full relative z-10">
          {/* Header */}
          <h1 className="text-5xl font-bold pt-40 text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Us
          </h1>

          {/* Contact Form */}
          <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue transition duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue transition duration-300"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue transition duration-300"
                  required
                  rows={6}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary-blue text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-6">Reach us directly at:</p>
            <div className="flex justify-center space-x-6 text-lg">
              <p className='text-zinc-500'>📞 (123) 456-7890</p>
              <p  className='text-zinc-500'>📧 info@musicacademy.com</p>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-lg mb-2 text-zinc-300">Follow Us:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className=" text-pink-500 text-primary-blue hover:text-blue-700 transition duration-300 transform hover:scale-110"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className=" text-zinc-500 text-primary-blue hover:text-blue-700 transition duration-300 transform hover:scale-110"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className=" text-zinc-500 text-primary-blue hover:text-blue-700 transition duration-300 transform hover:scale-110"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
     
   
    </div>
  );
};

export default Contact;
