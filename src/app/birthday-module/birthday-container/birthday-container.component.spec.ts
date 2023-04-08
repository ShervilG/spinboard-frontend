import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayContainerComponent } from './birthday-container.component';

describe('BirthdayContainerComponent', () => {
  let component: BirthdayContainerComponent;
  let fixture: ComponentFixture<BirthdayContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
