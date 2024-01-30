import { TestBed } from '@angular/core/testing';
import { InsuranceformComponent } from './insuranceform/insuranceform.component';

describe('InsuranceformComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceformComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InsuranceformComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'project-full-stack' title`, () => {
    const fixture = TestBed.createComponent(InsuranceformComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('project-full-stack');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InsuranceformComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, project-full-stack');
  });
});
