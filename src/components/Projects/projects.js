const projects = [
  {
    name: 'Tune Port',
    slug: 'tune-port',
    shortDescription:
      'Application for Spotify premium users officially approved by Spotify for production allows unlimited users.',
    description:
      'Built with React on Vite, using Mantine, SASS, Express, OAuth, and the Spotify API.',
    imageUrl: '/site4.png',
    websiteUrl: 'https://tune-port.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/tune-port',
    tags: ['React', 'Express', 'OAuth', 'Spotify API'],
    title: 'Tune Port: A Spotify Integration',
    image: '/site4.png',
    video: null, // Add a video URL if available or keep it as null
    whatILearned:
      'I learned how to integrate with the Spotify API, authenticate users using OAuth, and create a responsive UI using Mantine and SASS.',
    whyIBuiltIt:
      'I built Tune Port to provide a convenient way for Spotify premium users to access and manage their playlists, favorite tracks, and more.',
    problemItSolves:
      'Tune Port solves the problem of navigating through the Spotify app to find and manage playlists and tracks by providing an easy-to-use interface that is accessible through a web browser.',
    collaborators: null, // Add collaborators if available or keep it as null
  },

  {
    name: 'Prodigy Path',
    slug: 'prodigy-path',
    shortDescription:
      'Social media application for mentors and mentees to connect and work together.',
    description:
      'Built with Node.js, Socket.io, React.js, MongoDB, and Express, which includes role-based access control for added security.',
    imageUrl: '/site2.png',
    websiteUrl: 'https://prodigy-path.netlify.app/',
    githubUrl: 'https://github.com/tm-LBenson/prodigy-path',
    tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Socket.io'],
    title: 'Prodigy Path: Social Media for Mentors and Mentees',
    image: '/site2.png',
    video: null,
    whatILearned:
      'Through building Prodigy Path, I gained experience with implementing role-based access control, using Socket.io for real-time communication, and integrating MongoDB and Node.js for backend functionality.',
    whyIBuiltIt:
      'I created Prodigy Path to provide a platform for mentors and mentees to connect and work together more effectively and efficiently than through traditional means.',
    problemItSolves:
      'Prodigy Path addresses the problem of limited access to mentorship opportunities and inefficient communication between mentors and mentees, providing an all-in-one platform for both parties to connect and collaborate.',
    collaborators: null,
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
];
export default projects;
