import React from 'react';

const About = () => {
  const shadowStyle = {
    filter: 'drop-shadow(5px 5px 25px white)'
  };

  return (
    <>
      <div className='mt-10 mb-3 mx-10 bg-gray-800'>
        <div className='flex items-center justify-around my-5 p-3'>
          <h1 className='text-3xl underline'>About Me</h1>
          <img
            className='ml-4 mt-4 h-32 w-32 border-2 border-blue-500 rounded-full'
            src="/images/profile2.png"
            style={shadowStyle}
            alt="profile"
          />
        </div>
        <div className="w-full p-10">
          <p className="text-xl mb-5">
            Hello! I’m Elaf, currently working as an Assistant System Engineer-Trainee at Tata Consultancy Services, located in Delhi. I graduated with a B.Tech in Electronics and Communication Engineering from Ramkrishna Mahato Government Engineering College in 2024.
          </p>
          <p className="text-xl mb-5">
            My journey in tech began as a curious learner during my college years, where I explored web development and programming. Since then, I’ve grown into a novice full-stack developer, with skills across various technologies. During college, I was also part of the Robotics and Innovation Centre, further expanding my knowledge and practical skills.
          </p>
          <p className="text-xl mb-5">
            For more about my skills and professional experience, please visit the dedicated sections on this website.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-center md:text-left">
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
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
    </>
  );
};

export default About;
