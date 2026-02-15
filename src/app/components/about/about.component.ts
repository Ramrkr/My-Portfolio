import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutText = `I’m a driven full‑stack developer passionate about creating reliable, scalable, and user‑focused applications. I love turning ideas into impactful solutions by blending clean code with thoughtful design. Always eager to learn and adapt, I strive to deliver software that makes a real difference.`

  
  highlights = [
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance',
      description: 'Optimizing for speed and efficiency'
    }
  ];
}
