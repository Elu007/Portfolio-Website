import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <h2 className='text-center text-3xl underline mb-2'>Experience</h2>
      {/* Current Position */}
      <div className='flex flex-col items-center text-center space-y-4 mt-4'>
        <img src="icons/tcs.png" alt="Tata Consultancy Services" className='border-2 rounded border-white h-52 p-2 mx-auto' />
        <p className='text-xl'>
          Currently, I’m working as an <b>Assistant System Engineer-Trainee</b> at <b>Tata Consultancy Services</b> in Delhi. Here, I’m excited to learn new technologies and contribute to diverse projects.
        </p>
      </div>

      <h2 className='text-center text-sky-500 text-3xl mt-4 underline'>Internships</h2>

      {/* First Internship */}
      <div className='flex flex-col items-center text-center space-y-4 mt-4'>

        <img src="/images/JP.svg" alt="JP Morgan" className='border-2 rounded border-white h-52 p-2 mx-auto' />

        <p className='px-4'>
          In July 2023, I finished my virtual Software Development Internship at <b>JP Morgan Chase & Co</b>
        </p>
        <ul className='list-none pl-6'>
          <li>
            1. Displayed Stock Market Data with ReactJs Graph & Python Server
          </li>
          <li>
            2. The graph depicts the price changes of two equities.
          </li>
          <li>
            3. The graph depicts a stock's low and high prices as well as price fluctuations within a given range.
          </li>
        </ul>

      </div>

      {/* Second Internship */}
      <div className='flex flex-col items-center text-center space-y-4 mt-4'>

        <img src="/images/lgm.svg" alt="Lets Grow More" className='border-2 rounded border-white h-52 p-2 mx-auto' />

        <p className='px-4'>
          In March 2023, I finished my Internship in Web Development at <b>Lets Grow More</b>. I worked on four separate projects here, and it was a truly wonderful experience.
        </p>
        <ul className='list-none pl-6'>
          <li>
            1. Calculator with HTML, CSS & JavaScript
          </li>
          <li>
            2. React App to fetch users details with API
          </li>
          <li>
            3. Student Enrollment Form and show data by saving on local storage
          </li>
          <li>
            4. To Do list app using HTML, CSS & JavaScript
          </li>
        </ul>
      </div>
      {/* My Freelance Works */}
      <h2 className='text-center text-sky-500 text-3xl mt-4 underline'>Freelance Works</h2>
      <div className='flex flex-col items-center text-center space-y-4 mt-4'>
        <img src="/images/gfg.svg" alt="Freelance Writing" className='border-2 rounded border-white h-48 p-2 mx-auto' />
        <p className='text-xl'>I work as a Freelance Technical Content Writer at Geeks For Geeks.</p>
        <img src="/images/shiksha.svg" alt="Shiksha" className='border-2 rounded border-white h-44 p-2 mx-auto' />
        <p className='text-xl'>I worked as a Freelance Technical Content Writer from May to June 2023 at Shiksha.</p>
      </div>
      <h2 className='text-center text-sky-500 text-3xl mt-4 underline'>Certifications</h2>
      <div className='flex flex-col items-center text-center space-y-4 mt-4'>
        <Link to="https://www.hackerrank.com/certificates/bfb8e7b6f074" target="_blank" rel="noopener noreferrer"><img src="/images/hackerrank.svg" alt="Java Certificate" className='border-2 rounded border-white h-48 p-2 mx-auto' /></Link>
        <p className='text-xl'>Java (Basic) Hackerrank</p>
        <img src="/images/course.svg" alt="Coursera" className='border-2 rounded border-white h-44 p-2 mx-auto' />
        <p className='text-xl'>Programming Foundations with JavaScript, HTML and CSS - DUKE University</p>
      </div>
    </div>
  );
};

export default Experience;
