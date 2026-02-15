import { Component, OnInit, OnDestroy } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  typingIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private typingInterval: any;

  roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Angular Developer',
    'Problem Solver',
    'Creative Coder'
  ];

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTyping() {
    const currentRole = this.roles[this.typingIndex];
    const typingSpeed = this.isDeleting ? 50 : 100;
    const deletingSpeed = 30;

    if (!this.isDeleting && this.charIndex < currentRole.length) {
      this.typedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    } else if (this.isDeleting && this.charIndex > 0) {
      this.typedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.typingIndex = (this.typingIndex + 1) % this.roles.length;
    } else if (!this.isDeleting && this.charIndex === currentRole.length) {
      setTimeout(() => {
        this.isDeleting = true;
      }, 2000);
    }

    this.typingInterval = setTimeout(() => {
      this.startTyping();
    }, this.isDeleting ? deletingSpeed : typingSpeed);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

showResume = false;

openResume() {
  this.showResume = true;
}

closeResume() {
  this.showResume = false;
}

openResumee() {
  window.open('/resume', '_blank');
}



}
