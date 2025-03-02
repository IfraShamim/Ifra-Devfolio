import React , {useState} from 'react'
import SkillsBtn from './SkillsBtn'
import { FaLinkedin,FaInstagramSquare,FaFacebook,FaGithub } from "react-icons/fa";
import { SiGmail,SiFreelancer,SiFiverr } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required!";
    if (!formData.email) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email!";
    if (!formData.message) tempErrors.message = "Message cannot be empty!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };
  return (
    <div id='contact' className='font-montserrat text-center py-[2.5rem]'>
      <h2 className="text-[2rem] dark:text-white font-bold text-center mb-6 text-textColor mt-[1rem]">Contact Us</h2>
      <div className="flex justify-center items-center px-4">
      <div className="bg-white dark:bg-gray-300 p-4 shadow-lg rounded-lg w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-lightTextColor font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lightTextColor font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lightTextColor font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-textColor text-white py-2 rounded-lg font-semibold hover:bg-lightTextColor transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <h1 className='text-[1.5rem] font-bold my-[2.5rem] text-textColor dark:text-white'>Connect With Me</h1>
      <div className='mb-[2rem] px-[1rem] flex flex-wrap justify-center gap-2 md:gap-10'>
        <a href="https://www.linkedin.com/in/IfraShamim/"><SkillsBtn icon={<FaLinkedin className='text-[1.5rem] text-blue-600' />} value='LinkedIn' /></a>
        <a href=""><SkillsBtn icon={<FaInstagramSquare className='text-[1.5rem] text-pink-700' />} value='Instagram' /></a>
        <a href="https://www.facebook.com/ifra.shamim.54/"><SkillsBtn icon={<FaFacebook className='text-blue-700 text-[1.5rem]' />} value='Facebook' /></a>
        <a href="https://github.com/IfraShamim"><SkillsBtn icon={<FaGithub className='text-[1.5rem]' />} value='GitHub' /></a>
        <a href="mailto:ifrashamim29@gmail.com"><SkillsBtn icon={<SiGmail  className='text-[1.5rem] text-red-900 ' />} value='Gmail' /></a>
        <a href="https://www.freelancer.com/u/IfraShamim"><SkillsBtn icon={<SiFreelancer className='text-blue-600 text-[1.5rem]' />} value='Freelancer' /></a>
        <a href="https://www.fiverr.com/ifra_shamim?up_rollout=true"><SkillsBtn icon={<SiFiverr className='text-green-500 text-[1.5rem]' />} value='Fiver' /></a>
      
      </div>
    </div>
  )
}

export default Contact