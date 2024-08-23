import React from 'react';
import './projectview.css';
import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.jpg';
import proj4 from '../assets/proj4.jpg';

const projectsData = [
  {
    name: 'project name',
    description: 'Description for project 1',
    img: [proj1, proj2, proj3, proj4],
  },
];

const Projectview = () => {
  return (
    <>
      <div className="projectview">
        <div className="project-view">
          {projectsData.map((project, index) => (
            project.img.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`${project.name} ${imageIndex + 1}`} />
            ))
          ))}
        </div>
      </div>
    </>
  );
};

export default Projectview;
