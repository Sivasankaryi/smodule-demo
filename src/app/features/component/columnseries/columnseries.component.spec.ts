import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnseriesComponent } from './columnseries.component';

describe('ColumnseriesComponent', () => {
  let component: ColumnseriesComponent;
  let fixture: ComponentFixture<ColumnseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnseriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
