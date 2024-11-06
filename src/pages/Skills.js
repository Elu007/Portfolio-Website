import React from 'react'

const Skills = () => {
  const shadowStyleHTML = {
    filter: 'drop-shadow( 0px 0px 20px #f97316)'
  };
  const shadowStyleJS = {
    filter: 'drop-shadow( -10px -10px 13px yellow)'
  };
  const shadowStyleReact = {
    filter: 'drop-shadow( 0px 0px 20px #0ea5e9)'
  };
  const shadowStyleNode = {
    filter: 'drop-shadow( 0px 0px 20px #22c55e)'
  };
  const shadowStyleExpress = {
    filter: 'drop-shadow( 0px 0px 20px white)'
  };
  const shadowStyleJava = {
    filter: 'drop-shadow( 0px 0px 25px #991b1b)'
  };
  const shadowStyleLinux = {
    filter: 'drop-shadow( 0px 0px 25px #93c5fd)'
  };
  const shadowStyleTailwind = {
    filter: 'drop-shadow( 0px 0px 20px #93c5fd)'
  };
  const shadowStyleGit = {
    filter: 'drop-shadow( 0px 0px 20px #e9d5ff)'
  };
  return (
    <>
      <div>
        <h2 className='text-center text-3xl underline m-4'>Skills</h2>
        <div className='flex flex-wrap justify-center items-center space-x-2 bg-gray-700 p-4 md:p-8'>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleHTML}>
            <img src="/icons/html.svg" alt="html" className='h-28 w-28 mx-auto' />
            <p className='text-center'>HTML</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleExpress}>
            <img src="/icons/css.svg" alt="css" className='h-28 w-28 mx-auto' />
            <p className='text-center'>CSS</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleJS}>
            <img src="/icons/javascript.svg" alt="javascript" className='h-28 w-28 mx-auto' />
            <p className='text-center'>JavaScript</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleReact}>
            <img src="/icons/react.svg" alt="react" className='h-28 w-28 mx-auto' />
            <p className='text-center'>React Js</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleNode}>
            <img src="/icons/nodejs.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Node Js</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleExpress}>
            <img src="/icons/express.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Express Js</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleExpress}>
            <img src="/icons/mongodb.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>MongoDB</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleJava}>
            <img src="/icons/java.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Java</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleLinux}>
            <img src="/icons/linux.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Linux</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleTailwind}>
            <img src="/icons/tailwind.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Tailwind CSS</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleTailwind}>
            <img src="/icons/bootstrap.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>BootStrap 5</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleTailwind}>
            <img src="/icons/sql.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>SQL</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleGit}>
            <img src="/icons/github.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>GitHub</p>
          </div>
          <div className='border-2 border-indigo-600 p-6 rounded-md mb-4 md:mb-4' style={shadowStyleGit}>
            <img src="/icons/postman.svg" alt="work in progress" className='h-28 w-28 mx-auto' />
            <p className='text-center'>Postman</p>
          </div>
        </div>
        <div>
          <h2 className='text-center text-3xl underline m-4'>Interest</h2>
          <div className='flex flex-wrap justify-center md:space-x-44 bg-gray-700 p-4 md:p-8'>
            <div className='border-2 border-white p-6 rounded-md mb-4 md:mb-4'>
              <img src="/icons/blockchain.svg" alt="blockchain" className='h-28 w-28 mx-auto' />
              <p className='text-center pt-2'>Blockchain</p>
            </div>
            <div className='border-2 border-white p-6 rounded-md mb-4 md:mb-4'>
              <img src="/icons/finance.svg" alt="finance" className='h-28 w-28 mx-auto' />
              <p className='text-center pt-2'>Finance</p>
            </div>
            <div className='border-2 border-white p-6 rounded-md mb-4 md:mb-4'>
              <img src="/icons/article.svg" alt="article" className='h-28 w-28 mx-auto' />
              <p className='text-center pt-2'>Article Writing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
