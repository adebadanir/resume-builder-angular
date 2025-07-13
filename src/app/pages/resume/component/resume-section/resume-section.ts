import { Component, Input, input } from '@angular/core';
import { SectionData } from '../../../../types/section.data';

@Component({
  selector: 'app-resume-section',
  imports: [],
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.scss'
})
export class ResumeSection {
  @Input() label: string = '';
  @Input() sectionData: SectionData[] = [];
  
}
