import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { FaGithub } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';

const Home = () => {
  const gradientBackground = {
    background: 'linear-gradient(180deg, #213ca8 0%, #111112 64%)',
    backgroundColor: '#213ca8',
    height: '100vh'
  };

  const shadowStyle = {
    filter: 'drop-shadow(10px 10px 25px white)'
  };

  const customCSS = `
    @keyframes colorChange {
      0% {
        color: orange;
      }
      33% {
        color: white;
      }
      66% {
        color: green;
      }
      100% {
        color: orange;
      }
    }
  
    .animate-color-change {
      animation: colorChange 10s linear infinite;
    }
  `;

  return (
    <div style={gradientBackground} className='h-screen flex justify-center items-center'>
      <style>{customCSS}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto p-6 mt-4">
        {/* Left side: Name and Designation */}
        <div className="md:border-r-2 border-gray-300 md:pr-8">
          <h1 className="text-4xl md:text-4xl font-bold text-center md:text-left animate-color-change">SK Elaf Ahmed</h1>
          <h3 className="text-xl md:text-2xl text-center md:text-left">Software Developer</h3>
          <p className="hidden md:block">I code to make the internet a better place | I code to turn ideas into reality</p>

          <div className="text-center md:text-left">
            <button className="relative mt-6 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a
                  href="/Resume.pdf"
                  download
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>

        {/* Right side: Image with rounded border */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/profile.png"
            alt="MyImage"
            className="h-64 w-64 md:h-64 md:w-64 rounded-full border-4 border-blue-500"
            style={shadowStyle}
          />
        </div>
        <div className="text-center">
          <h2 className="mb-4">Connect with me on Social Media</h2>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/sk-elaf-ahmed-bb85b0210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaLinkedin size={32} />
            </a>
            <SocialIcon url="https://x.com/SkElafAhmed1?t=puvlxt4SfLUeEs2Uw3d55w&s=09" network="x" />
            <a
              href="https://github.com/Elu007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <FaGithub size={32} color='#FFFFFF' />
            </a>
            <a
              href="https://instagram.com/ig__sea?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              <SlSocialInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
