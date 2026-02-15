import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'ramrkr2016@gmail.com',
    phone: '+91 8220778070',
    location: 'Chennai, India'
  };

  contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: this.contactInfo.email,
      link: `mailto:${this.contactInfo.email}`
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: this.contactInfo.phone,
      link: `tel:${this.contactInfo.phone}`
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: this.contactInfo.location,
      link: '#'
    }
  ];

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission here
      console.log('Form submitted:', form.value);
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    }
  }
}
