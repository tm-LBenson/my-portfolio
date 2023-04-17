import Image from 'next/image';

function Projects() {
  const projects = [
    {
      name: 'Tune Port',
      description:
        'Application for Spotify premium users officially approved by Spotify for production allows unlimited users. Built with React on Vite, using Mantine, SASS, Express, OAuth, and the Spotify API.',
      imageUrl: '/site4.png',
      websiteUrl: 'https://tune-port.netlify.app/',
      githubUrl: 'https://github.com/tm-LBenson/tune-port',
      tags: ['React', 'Express', 'OAuth', 'Spotify API'],
    },
    {
      name: 'Prodigy Path',
      description:
        'Social media application for mentors and mentees to connect and work together. Built with Node.js, Socket.io, React.js, MongoDB, and Express, which includes role-based access control for added security.',
      imageUrl: '/site2.png',
      websiteUrl: 'https://prodigy-path.netlify.app/',
      githubUrl: 'https://github.com/tm-LBenson/prodigy-path',
      tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Socket.io'],
    },
    {
      name: 'YelpCamp',
      description:
        'Full-stack application used for reviewing and sharing campgrounds around the world. Built with Node.Js, Express, EJS, CSS, Bootstrap, MongoDB, Server Side Rendering, Session Cookies,  and Cloudinary.',
      imageUrl: '/site3.png',
      websiteUrl: 'https://yelp-camp-lewis.cyclic.app/',
      githubUrl: 'https://github.com/tm-LBenson/yelp-camp-lewis',
      tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Cloudinary'],
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          <span>Projects</span>
          <hr className="projects-divider" />
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.name}
            >
              <div className="project-image">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={600}
                  height={400}
                />
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-buttons">
                  {project.websiteUrl && (
                    <a
                      className="project-website-button"
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  )}
                  <a
                    className="project-github-button"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
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
