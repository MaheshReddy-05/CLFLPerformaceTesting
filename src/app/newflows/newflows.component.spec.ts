import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewflowsComponent } from './newflows.component';

describe('NewflowsComponent', () => {
  let component: NewflowsComponent;
  let fixture: ComponentFixture<NewflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewflowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
