import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  imports: [],
  templateUrl: './resume-header.html',
  styleUrl: './resume-header.scss',
})
export class ResumeHeader {
  dummy = {
    name: 'ADE BADANI RAMDHAN',
    info: [
      { label: 'Phone', data: '123-456-7890' },
      { label: 'Email', data: 'YyH6Y@example.com' },
      {
        label: 'LinkedIn',
        data: 'https://www.linkedin.com/in/johndoe',
        isLink: true,
      },
      { label: 'Website', data: 'https://example.com', isLink: true },
      { label: 'Address', data: '123 Main St, Anytown, USA' },
    ],
  };
}
