import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [

    {
      title: 'Trainer Hub',
      description: 'A Web based platform that streamlines corporate training by connecting managers, coordinators, and trainers through requirement posting, trainer allocation, and feedback management.',
      image: 'assets/home.png',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker','Microservices'],
      github: 'https://github.com/Ramrkr/TrainerHub',
      demo: 'https://mytrainerhub.netlify.app',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: 'assets/grocery.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Ramrkr/Grocery-Supply-Co.',
      demo: 'https://demo.com',
      featured: true
    },
   
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      image: 'assets/task.png',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
      image: 'assets/Weather.png',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/Ramrkr/WeatherApp-JS',
      demo: 'https://clever-hamster-65118a.netlify.app/',
      featured: false
    },
    // {
    //   title: 'Fitness Tracker',
    //   description: 'Mobile-first fitness tracking application with workout plans and progress tracking.',
    //   image: 'assets/Fitness.png',
    //   technologies: ['React', 'Firebase', 'Redux'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com',
    //   featured: false
    // },
    {
      title: 'Calculator App',
      description: 'Responsive ReactJS calculator application supporting basic arithmetic operations with clean UI and real-time result updates.',
      image: 'assets/Calculator.png',
      technologies: ['ReactJS', 'JavaScript (ES6)', 'CSS3', 'Context API'],
      github: 'https://github.com/Ramrkr/React-Calculator-ADV',
      demo: 'https://magenta-syrniki-a30435.netlify.app/',
      featured: false
    },
    
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      image: 'assets/portfolio.png',
      technologies: ['Angular', 'SCSS'],
      github: 'https://github.com/Ramrkr/My-Portfolio',
      demo: 'https://ramanathanrk.netlify.app/',
      featured: false
    }
  ];
}
