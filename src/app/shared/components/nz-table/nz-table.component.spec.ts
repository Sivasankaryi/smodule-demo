import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzTableComponent } from './nz-table.component';

describe('NzTableComponent', () => {
  let component: NzTableComponent;
  let fixture: ComponentFixture<NzTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
