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
    <div id='contact' className='text-center'>
      <div className="flex justify-center items-center px-4">
      <div className="bg-white p-2 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <h1 className='text-[2rem] font-bold my-[2rem]'>Connect With Me</h1>
      <div className='mb-[2rem] px-[1rem] flex flex-wrap justify-center gap-2 md:gap-10'>
        <a href="https://www.linkedin.com/in/IfraShamim/"><SkillsBtn icon={<FaLinkedin />} value='LinkedIn' /></a>
        <a href=""><SkillsBtn icon={<FaInstagramSquare />} value='Instagram' /></a>
        <a href="https://www.facebook.com/ifra.shamim.54/"><SkillsBtn icon={<FaFacebook />} value='Facebook' /></a>
        <a href="https://github.com/IfraShamim"><SkillsBtn icon={<FaGithub/>} value='GitHub' /></a>
        <a href="mailto:ifrashamim29@gmail.com"><SkillsBtn icon={<SiGmail  />} value='Gmail' /></a>
        <a href="https://www.freelancer.com/u/IfraShamim"><SkillsBtn icon={<SiFreelancer />} value='Freelancer' /></a>
        <a href="https://www.fiverr.com/ifra_shamim?up_rollout=true"><SkillsBtn icon={<SiFiverr />} value='Fiver' /></a>
      
      </div>
    </div>
  )
}

export default Contact