import { Component } from '@angular/core';
import { ResumeHeader } from './component/resume-header/resume-header';
import { ResumeSection } from './component/resume-section/resume-section';

@Component({
  selector: 'app-resume',
  imports: [ResumeHeader, ResumeSection],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  dummy = [
    {
      label : 'Project Experience',
      data : [
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        },
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        },
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        }
      ]
    },
    {
      label : 'Project Experience',
      data : [
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        },
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        },
        { content: null,
          places: {place: null, address: null},
          position: {position: 'Personal Portfolio Website', duration: 'May 2025'},
          list: ['Developed a personal website to showcase my skills, projects, and professional experiences as a Full Stack Developer. The site highlights my expertise in web development, project work, and technical knowledge, and serves as a platform for connecting with potential employers and collaborators.']
        }
      ]
    },    
  ]
}
