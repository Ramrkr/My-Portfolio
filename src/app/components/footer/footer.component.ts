import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Ramrkr', name: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ramrkr', name: 'LinkedIn' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/ramanathan_rk', name: 'Instagram' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
