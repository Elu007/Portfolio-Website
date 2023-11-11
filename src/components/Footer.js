import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { FaGithub } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='sm:py-8'>
      <div className="container mx-auto py-2 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Column 1: Logo and Text */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/images/footer.png" alt="Logo" className="w-12 h-12 mr-2" />
          <p className="text-sm">@Sk Elaf Ahmed</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 3: Social Links */}
        <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/sk-elaf-ahmed-bb85b0210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaLinkedin size={28} />
            </a>
            <SocialIcon url="https://x.com/SkElafAhmed1?t=puvlxt4SfLUeEs2Uw3d55w&s=09" network="x" style={{height:"32px", width:"32px"}}/>
            <a
              href="https://github.com/Elu007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <FaGithub size={28} color='#FFFFFF' />
            </a>
            <a
              href="https://instagram.com/ig__sea?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              <SlSocialInstagram size={28} />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
