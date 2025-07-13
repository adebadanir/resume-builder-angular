import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperience } from './resume-experience';

describe('ResumeExperience', () => {
  let component: ResumeExperience;
  let fixture: ComponentFixture<ResumeExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
