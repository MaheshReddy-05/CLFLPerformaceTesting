import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldflowsComponent } from './oldflows.component';

describe('OldflowsComponent', () => {
  let component: OldflowsComponent;
  let fixture: ComponentFixture<OldflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldflowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
