import { Component } from '@angular/core';
import { ResumeHeader } from './component/resume-header/resume-header';

@Component({
  selector: 'app-resume',
  imports: [ResumeHeader],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
