import fashion from '../assets/fashion.png';
import countries from '../assets/countries.png';
import magicians from '../assets/magicians.png';
import traveler from '../assets/traveler.png';
import motorbike from '../assets/motorbike.png';
import budget from '../assets/budget.png';

const otherProjects = [
  {
    id: 1,
    title: 'Fashion Designers Summit',
    image: fashion,
    description: 'This is a simple demo summit page for Fashion designers across my country. This project has both mobile and desktop versions.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: ['https://albertkantwi.github.io/Portfolio_Project/', 'https://github.com/albertkantwi/Portfolio_Project/'],
  },
  {
    id: 2,
    title: 'Countries in the World',
    image: countries,
    description: 'Countries in the world is a React mobile web application that allows users to check a list of metrics retrieved from a selected API called REST countries.',
    technologies: ['React', 'Redux', 'API', 'CSS'],
    link: ['https://countries-in-the-world-qfqy.onrender.com/', 'https://github.com/albertkantwi/react-metrics-webapp'],
  },
  {
    id: 3,
    title: 'Math Magicians',
    image: magicians,
    description: 'Math Magicians is a frontend app that delivers home section, math-quote section and a calculator section.',
    technologies: ['React', 'JEST', 'CSS'],
    link: ['https://math-magicians-2db8.onrender.com/', 'https://github.com/albertkantwi/Math-magicians'],
  },
  {
    id: 4,
    title: 'Space Travelers Hub',
    image: traveler,
    description: 'Space Travelers, provide details on SpaceX rockets and ongoing missions. Users can browse and reserve rockets while also joining or leaving missions.',
    technologies: ['React', 'Redux', 'API', 'CSS'],
    link: ['https://space-travel-reserve-rocket.netlify.app/', 'https://github.com/AliRezaBmeDu/space-travel-hub'],
  },
  {
    id: 5,
    title: 'Motorcycle Booking App',
    image: motorbike,
    description: 'Motorcycle Booking App is a full-stack web application that allows users to book an appointment of their favourite motorcycle.',
    technologies: ['React', 'Ruby on Rails', 'SQL'],
    link: ['https://motobookingapp.onrender.com/', 'https://github.com/Kaiserabbas/motorcycle_booking_front_end'],
  },
  {
    id: 6,
    title: 'Budget App',
    image: budget,
    description: 'Budget App is a Ruby on Rails mobile web application for streamlined budget management. Users can register and log in to keep their financial data private.',
    technologies: ['Ruby on Rails', 'SQL', 'CSS'],
    link: ['https://budget-app-2vkh.onrender.com/', 'https://github.com/albertkantwi/Budget-App'],
  },
];

export default otherProjects;
