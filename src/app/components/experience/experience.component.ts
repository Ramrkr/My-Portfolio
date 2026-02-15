import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer',
      company: 'LTIMindtree',
      period: '2025 - Present',
      description: 'Leading development of scalable web applications using Angular and Spring Boot. Mentoring junior developers and implementing best practices.',
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'PostgreSQL','Spring Cloud','Docker','Kubernetes','Microservices','Google Cloud']
    },
    {
      title: 'Full Stack Intern',
      company: 'Eagle Technologies',
      period: '2024 - 2025',
      description: 'Developed and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'PostgreSQL','MongoDB','Express']
    }
  ];
}
