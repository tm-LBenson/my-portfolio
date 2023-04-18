import Image from 'next/image';

function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="technical-skills-section"
    >
      <div className="technical-skills-container">
        <div className="technical-skills-text">
          <h2
            id="technical-skills"
            className="technical-skills-heading"
          >
            <span>Technical Skills</span>
            <hr className="technical-skills-divider" />
          </h2>
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript, Python, HTML, CSS, SQL,
              Sass, Bash
            </li>
            <li>
              <strong>Frameworks and libraries:</strong> React, Node.js,
              Express, MERN stack, RESTful APIs, MongoDB, PostgreSQL, Git
            </li>
            <li>
              <strong>Cloud computing services:</strong> AWS Elastic Beanstalk,
              AWS EC2, AWS API Gateway, AWS Lambda
            </li>
            <li>
              <strong>Front-end tools:</strong>Next.js, Astro, React Native,
              Bootstrap, Sass
            </li>
            <li>
              <strong>ORM tools:</strong> Prisma, Sequelize
            </li>
            <li>
              <strong>Other tools:</strong> OAuth, GitHub, VS Code, Web Sockets,
              jQuery, Cloudinary, Netlify, Hexo SSG, VirtualBox, DynamoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
