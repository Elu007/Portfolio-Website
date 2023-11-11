import React from 'react'

const About = () => {
  const shadowStyle = {
    filter: 'drop-shadow(5px 5px 25px white)'
  };


  return (
    <>
      <div className='mt-10 mb-3 mx-10 bg-gray-800'>
        <div className='flex items-center justify-around my-5 p-3'>
          <h1 className='text-3xl underline'>About Me</h1>
          <img className='ml-4 h-32 w-32 border-2 border-blue-500 rounded-full' src="/images/profile2.png" style={shadowStyle} alt="profile" />
        </div>
        <div className="w-full p-10">
          <p className="text-xl mb-5">
            I am Elaf, and I enrolled in Ramkrishna Mahato Government Engineering College in Purulia in 2020 to pursue a B.Tech degree in Electronics and Communication Engineering. I began my adventure during the Covid era as a tech geek who was very interested in learning about the newest advancements in technology and how they were used. In my second year of college,  I started writing Java code and developing projects on web development. I can now declare that I am a novice full stack developer as a result of that.
          </p>
          <p className="text-xl mb-5">
            I joined the Robotics and Innovation Centre at my institution to learn more about the newest technology and to hone the skills I already possess. Around this time, I started writing technical content for Geeks For Geeks, which has been really helpful to me in my study and in building a thorough understanding of code and technologies. I attempt to assist novice developers and aid them on their journey by creating technical articles.
          </p>
          <p className="text-xl mb-5">
            With everything, it aided in both my social and personal development.
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
  )
}

export default About
