import Image from 'next/image';
import { useRouter } from 'next/router';
import projects from './projects';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Icon } from '@iconify/react';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleProjectClick = (projectName) => {
    router.push(`/project/${encodeURIComponent(projectName)}`);
  };

  const handleViewCodeClick = (e, projectGithub) => {
    e.stopPropagation(); // prevent the event from propagating up to the project card
    window.open(projectGithub, '_blank');
  };

  const handleViewWebsiteClick = (e, projectWebsite) => {
    e.stopPropagation(); // prevent the event from propagating up to the project card
    window.open(projectWebsite, '_blank');
  };

  const handleMouseEnter = (projectName) => {
    setHoveredProject(projectName);
    document.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleTouchStart = (projectName) => {
    if (isMobile) {
      setHoveredProject(projectName);
      document.addEventListener('touchmove', handleTouchMove);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setHoveredProject(null);
      document.removeEventListener('touchmove', handleTouchMove);
    }
  };

  const handleTouchMove = (event) => {
    setMousePosition({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          <span>Work I have done</span>
          <hr className="projects-divider" />
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.name}
              onClick={() => handleProjectClick(project.name)}
              onMouseEnter={() => handleMouseEnter(project.name)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(project.name)}
              onTouchEnd={handleTouchEnd}
            >
             
              <div className="project-content">
                <h3 className="project-name">
                  <span>{project.name}</span>
                </h3>
                <Icon
                  className="folder"
                  width={'90px'}
                  icon="material-symbols:folder-outline-rounded"
                />
                <div className="project-buttons">
                  <Icon
                    width={'35px'}
                    className="icon"
                    icon="mdi:github"
                    onClick={(e) => handleViewCodeClick(e, project.githubUrl)}
                  />
                  {project.websiteUrl && (
                    <Icon
                      width={'35px'}
                      className="icon"
                      icon="octicon:link-external-16"
                      onClick={(e) =>
                        handleViewWebsiteClick(e, project.websiteUrl)
                      }
                    />
                  )}
                </div>
                <p className="project-description">
                  <span>{project.description}</span>
                </p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
