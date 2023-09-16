import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link to="/" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link >
        <Link to="/about" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link to="/skills" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
        </Link>
        <Link to="/projects" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
        </Link>
        <Link to="/experience" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Experience</li>
        </Link>
        <Link to="/contact" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav className="sticky top-0 z-50 w-full justify-between backdrop-filter backdrop-blur-lg bg-gray-50 bg-opacity-30 text-white">
      <div className="h-10vh flex justify-between lg:py-3 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold"><img className='h-12 w-12' src="/images/SEALogo.gif" alt="logo" />
          </span>
          <h4 className="px-2">SK Elaf Ahmed</h4>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </Link>
              <Link to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
              </Link>
              <Link to="/skills">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Skills</li>
              </Link>
              <Link to="/projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
              </Link>
              <Link to="/experience">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Experience</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>

        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

