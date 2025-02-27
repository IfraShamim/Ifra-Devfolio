import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Flappy Bird Game",
      image: "Capture1.png",
      technologies: ["Html5", "Css3", "Javascript"],
      category: "JavaScript",
      demoLink: "https://ifrashamim.github.io/flappyBirdGame/",
    },
    {
      id: 2,
      title: "Snake Game",
      image: "Capture2.png",
      technologies: ["Html5", "Css3", "Javascript"],
      category: "JavaScript",
      demoLink: "https://ifrashamim.github.io/snakeGame/",
    },
    {
      id: 3,
      title: "Currency Converter",
      image: "Capture3.png",
      technologies: ["Html5", "Css3", "Javascript"],
      category: "JavaScript",
      demoLink: "https://ifrashamim.github.io/currencyConverterInPKR/",
    },
    {
      id: 4,
      title: "Weather App",
      image: "Capture4.png",
      technologies: ["React", "Tailwind", "API"],
      category: "React JS",
      demoLink: "https://weather-app-kohl-one-95.vercel.app/",
    },
    {
      id: 5,
      title: "Theme Switcher",
      image: "Capture5.png",
      technologies: ["React", "Tailwind Css"],
      category: "React JS",
      demoLink: "https://bg-changer-react-ruddy.vercel.app/",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Removes side arrows for a clean look
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="my-[2.5rem] px-6 md:px-40 overflow-hidden" id="projects">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#c18572]">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-8 mb-6">
        {["All", "JavaScript", "React JS"].map((category) => (
          <button
            key={category}
            className={`px-2 py-1 rounded transition ${
              selectedCategory === category
                ? "bg-[#c18572] text-white"
                : "bg-[#cdad9e] text-white hover:bg-[#c18572]"
            }`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Slider Section */}
      <Slider {...settings} className="custom-slider">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(({ id, title, image, technologies, demoLink }) => (
            <div key={id}>
              <div className="bg-white mr-2 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-[#c18572] text-xl font-semibold mb-2">{title}</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#cdad9e] text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 shadow py-2 px-4 rounded-full bg-[#c18572] text-white transition hover:bg-gray-800"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#c18572]">No projects found.</p>
        )}
      </Slider>

      {/* Custom Styles for Dots */}
      <style>
        {`
          .custom-dots ul {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding-top: 16px;
          }
          .custom-dots li {
            width: 12px;
            height: 12px;
            background-color: gray;
            border-radius: 50%;
            transition: background 0.3s ease;
          }
          .custom-dots li.slick-active {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
