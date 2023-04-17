import Image from 'next/image';
import { useRouter } from 'next/router';
import projects from './projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
            >
              {hoveredProject === project.name && (
                <motion.div
                  className="project-image"
                  style={{
                    position: 'fixed',
                    top: mousePosition.y,
                    left: mousePosition.x,
                    pointerEvents: 'none',
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={600}
                    height={400}
                  />
                </motion.div>
              )}
              <div className="project-content">
                <h3 className="project-name">
                  <span>{project.name}</span>
                </h3>
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

                <div className="project-buttons">
                  {project.websiteUrl && (
                    <button
                      className="btn button"
                      onClick={(e) =>
                        handleViewWebsiteClick(e, project.websiteUrl)
                      }
                    >
                      View Website
                    </button>
                  )}
                  <button
                    className="btn button"
                    onClick={(e) => handleViewCodeClick(e, project.githubUrl)}
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
