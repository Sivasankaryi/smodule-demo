import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonCapacityComponent } from './pon-capacity.component';

describe('PonCapacityComponent', () => {
  let component: PonCapacityComponent;
  let fixture: ComponentFixture<PonCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonCapacityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
