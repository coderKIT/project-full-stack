import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceformComponent } from './insuranceform.component';

describe('InsuranceformComponent', () => {
  let component: InsuranceformComponent;
  let fixture: ComponentFixture<InsuranceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
