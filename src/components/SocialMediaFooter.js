// src/components/SocialMediaFooter.js

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaFooter = ({ darkMode }) => {
  return (
    <div
      className={`bg-gray-300 py-4 ${
        darkMode ? "bg-gray-700 text-white" : "text-gray-700"
      } text-center`}
    >
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=100040818471546"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-600 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/NicoleMagallanes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-600 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nicole-magallanes-68b89b1b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-800 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-2 text-sm">Follow me on social media!</p>

      <div
        className={`bg-gray-300 py-2 ${
          darkMode ? "bg-gray-700 text-white" : "text-gray-700"
        } text-center`}
      >
        <p className="text-sm">Created by Nicole Magallanes</p>
      </div>
    </div>
  );
};

export default SocialMediaFooter;
