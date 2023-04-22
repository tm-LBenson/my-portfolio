const projects = [
  {
    name: 'Tune Port',
    slug: 'tune-port',
    shortDescription:
      'Application for Spotify premium users officially approved by Spotify for production allows unlimited users.',
    description:
      'Built with React on Vite, using Mantine, SASS, Express, OAuth, and the Spotify API. The most impressive feature is the custom recommendations. It uses an Express backend, and is approved by Spotify as a supported app, which means we can have unlimited users with open access.',
    imageUrl: '/site4.png',
    websiteUrl: 'https://tune-port.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/tune-port',
    tags: ['React', 'Express', 'OAuth', 'Spotify API'],
    title: 'Tune Port: A Spotify Integration',
    image: '/site4.png',
    video: null,
    whatILearned:
      'I learned how to integrate with the Spotify API, authenticate users using OAuth, and create a responsive UI using Mantine and SASS.',
    whyIBuiltIt:
      'I built Tune Port to provide a convenient way for Spotify premium users to access and manage their playlists, favorite tracks, and more.',
    problemItSolves:
      'Tune Port solves the problem of navigating through the Spotify app to find and manage playlists and tracks by providing an easy-to-use interface that is accessible through a web browser.',
    collaborators: ['Steven Rejdukowski'],
  },

  {
    name: 'Prodigy Path',
    slug: 'prodigy-path',
    shortDescription:
      'A comprehensive mentorship application connecting mentors and mentees to facilitate skill development and industry experience.',
    description:
      'Developed as a capstone project at Code Fellows using Node.js, Socket.io, React.js, MongoDB, Express, Redux, and Jest, featuring role-based access control for enhanced security and a streamlined user experience.',
    imageUrl: '/site2.png',
    websiteUrl: 'https://prodigy-path.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/prodigy-path',
    tags: [
      'Node.js',
      'React',
      'MongoDB',
      'Express',
      'Socket.io',
      'Redux',
      'Jest',
    ],
    title:
      'Prodigy Path: A Mentorship Platform for Skill Development and Industry Experience',
    image: '/site2.png',
    video: null,
    whatILearned:
      'While building Prodigy Path, I gained invaluable experience in implementing role-based access control, using Socket.io for real-time communication, integrating MongoDB and Node.js for backend functionality, working with Redux for state management, and utilizing Jest for testing. Additionally, working in a team environment taught me the importance of collaboration, communication, and project management.',
    whyIBuiltIt:
      'I developed Prodigy Path as a capstone project at Code Fellows to create a comprehensive platform that connects mentors and mentees, enabling them to collaborate more effectively and efficiently than through conventional methods, while also showcasing my technical skills and abilities.',
    problemItSolves:
      'Prodigy Path addresses the issue of limited access to mentorship opportunities and streamlines communication between mentors and mentees, creating a unified platform for both parties to connect, work together, and enhance their skills and industry knowledge.',
    collaborators: [
      'Steven Rejdukowski',
      'Elias Staehle',
      'Seth Parker Pierce',
    ],
  },

  {
    name: 'YelpCamp',
    slug: 'yelp-camp',
    shortDescription:
      'Full-stack application used for reviewing and sharing campgrounds around the world.',
    description:
      'Built with Node.Js, Express, EJS, CSS, Bootstrap, MongoDB, Server Side Rendering, Session Cookies, and Cloudinary.',
    imageUrl: '/site3.png',
    websiteUrl: 'https://yelp-camp-lewis.cyclic.app/',
    githubUrl: 'https://github.com/tm-LBenson/yelp-camp-lewis',
    tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Cloudinary'],
    title: 'YelpCamp: Share and Review Campgrounds Worldwide',
    image: '/site3.png',
    video: null,
    whatILearned:
      'Building YelpCamp gave me experience in using server side rendering, managing user sessions and authentication, and integrating with third-party APIs like Cloudinary for image hosting.',
    whyIBuiltIt:
      'I built YelpCamp to create a platform for campers and outdoor enthusiasts to share their experiences and recommendations with each other, and to discover new camping destinations around the world.',
    problemItSolves:
      'YelpCamp addresses the problem of limited and outdated information on camping destinations, providing a user-generated platform for up-to-date reviews and recommendations on campgrounds around the world.',
    collaborators: null,
  },
  {
    name: 'Hexo Blog',
    slug: 'hexo-blog',
    shortDescription:
      'Inaugural blog site built with Hexo and JavaScript, chronicling the journey through Code Fellows.',
    description:
      'Developed using Hexo static site generator, featuring articles on data structures, algorithms, and professional growth.',
    imageUrl: '/site1.png',
    websiteUrl: 'https://hexo-lbenson-blog.netlify.app',
    githubUrl: 'https://github.com/your-github/hexo-blog-repo', // Replace with the correct repo URL
    tags: ['Hexo', 'JavaScript', 'Blog'],
    title: "Hexo Blog: A Developer's Journey",
    image: '/site1.png',
    video: null,
    whatILearned:
      'Building the Hexo Blog allowed me to learn about static site generators and improve my writing and communication skills.',
    whyIBuiltIt:
      'I created the Hexo Blog to document my experience in Code Fellows and share my knowledge and insights with others.',
    problemItSolves:
      'The blog provides a platform for me to share my experiences and lessons learned in software development, helping others who might be on a similar journey.',
    collaborators: null,
  },
  {
    name: 'Guess A Number',
    slug: 'guess-a-number',
    shortDescription:
      'Retro 8-bit style number guessing game with progressively challenging gameplay.',
    description:
      'Created using HTML, CSS, and JavaScript, featuring local storage for tracking high scores.',
    imageUrl: '/site5.png',
    websiteUrl: 'https://tm-lbenson.github.io/guessAnumber/',
    githubUrl: 'https://github.com/tm-LBenson/guessAnumber',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
    title: 'Guess A Number: A Retro Number Guessing Game',
    image: '/site5.png',
    video: null,
    whatILearned:
      'Building Guess A Number helped me to improve my JavaScript skills, as well as my understanding of local storage and game mechanics.',
    whyIBuiltIt:
      'I created Guess A Number to experiment with game development and provide a fun, nostalgic gaming experience for users.',
    problemItSolves:
      'Guess A Number provides a simple and enjoyable gaming experience, offering a break from daily routine and stress.',
    collaborators: null,
  },
  {
    name: 'Expense Tracker',
    slug: 'expense-tracker',
    shortDescription:
      'Practical and user-friendly React app for expense tracking and visualization.',
    description:
      'Built with React, featuring an intuitive interface for managing personal finances.',
    imageUrl: '/site6.png',
    websiteUrl: 'https://expense-cra.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/expense-tracker',
    tags: ['React', 'Expense Tracking', 'Personal Finance'],
    title: 'Expense Tracker: Manage Your Finances',
    image: '/site6.png',
    video: null,
    whatILearned:
      'Building the Expense Tracker allowed me to improve my React skills and learn more about managing state and user inputs.',
    whyIBuiltIt:
      'I created the Expense Tracker to help users manage their personal finances more effectively and gain insights into their spending habits.',
    problemItSolves:
      'Expense Tracker provides a user-friendly tool for managing and visualizing personal finances, helping users make informed decisions about their spending.',
    collaborators: null,
  },
  {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    shortDescription:
      'Easy-to-install custom NPM package for insightful web analytics and informed decision-making.',
    description:
      'Built using JavaScript, featuring visual data representation with graphs and maps for clarity.',
    imageUrl: '/site7.png',
    websiteUrl: 'https://analytics-benson.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/analytics-dashboard',
    tags: ['JavaScript', 'NPM Package', 'Web Analytics'],
    title: 'Analytics Dashboard: Visualize Your Web Data',
    image: '/site7.png',
    video: null,
    whatILearned:
      'Building the Analytics Dashboard helped me learn about creating custom NPM packages and working with various data visualization libraries.',
    whyIBuiltIt:
      'I created the Analytics Dashboard to offer an easy-to-install analytics solution for web developers to better understand their website traffic and user behavior.',
    problemItSolves:
      'The Analytics Dashboard provides an accessible and visually clear way to analyze web data, helping developers make informed decisions about their websites.',
    collaborators: null,
  },
];
export default projects;
