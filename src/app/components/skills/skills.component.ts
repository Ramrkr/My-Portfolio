import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 85, icon: 'fab fa-angular' },
        { name: 'TypeScript', level: 80, icon: 'fab fa-js-square' },
        { name: 'HTML/CSS', level: 80, icon: 'fab fa-html5' },
        { name: 'React', level: 70, icon: 'fab fa-react' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Java', level: 80, icon: 'fab fa-java' },
        { name: 'Node.js', level: 75, icon: 'fab fa-node' },
        { name: 'Python', level: 70, icon: 'fab fa-python' },
        { name: 'PostgreSQL', level: 80, icon: 'fas fa-database' }
      ]
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf' },
        { name: 'Spring Cloud', level: 80, icon: 'fas fa-cloud' },
        { name: 'Microservices', level: 70, icon: 'fas fa-microchip' },
        { name: 'RESTful APIs', level: 80, icon: 'fas fa-code' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 90, icon: 'fab fa-git-alt' },
        { name : 'n8n', level: 80, icon: 'fas fa-robot' },
        { name : 'Agentic AI Integration', level: 80, icon: 'fas fa-brain' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'Docker', level: 75, icon: 'fab fa-docker' },
        { name: 'Kubernetes', level: 70, icon: 'fas fa-cubes'  },
        { name: 'GCP', level: 70, icon: 'fab fa-google' }


      ]
    }
  ];

  getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'Frontend': 'fas fa-paint-brush',
      'Backend': 'fas fa-server',
      'Frameworks': 'fas fa-layer-group',
      'Tools': 'fas fa-tools',
      'Cloud & DevOps': 'fas fa-cloud'

    };
    return iconMap[category] || 'fas fa-code';
  }
}
