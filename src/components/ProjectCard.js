import React from 'react';
import { Link } from 'react-router-dom';

const shadowWhiteStyle = {
  boxShadow: '0 8px 12px -4px rgba(255, 255, 255, 0.2), 0 4px 8px -4px rgba(255, 255, 255, 0.12)',
};

const ProjectCard = ({ imageSrc, demoLink, sourceLink, projectName, description }) => {
  return (
    <div className="max-w-sm h-fit rounded bg-gray-800 overflow-hidden shadow-lg mx-auto my-4" style={shadowWhiteStyle}>
      <img className="w-full h-auto" src={imageSrc} alt={`Project: ${projectName}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <p className='text-center'>{description}</p>
      </div>
      <div className="flex text-center justify-between px-6 py-4">
        <Link
          to={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded"
        >
          Demo
        </Link>
        <Link
          to={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white py-4 px-6 rounded"
        >
          Source
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
