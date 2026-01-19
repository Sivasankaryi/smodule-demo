import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzTableComponent } from '../../../shared/components/nz-table/nz-table.component';
import { SharedTableConfig } from '../../../shared/components/nz-table/nz-table.modal';

@Component({
  selector: 'app-columnseries',
  standalone: true,
  imports: [NzTableComponent],
  templateUrl: './columnseries.component.html',
  styleUrl: './columnseries.component.scss',
})
export class ColumnseriesComponent implements OnInit {
  columnTableConfig!: SharedTableConfig;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.columnTableConfig = {
      bordered: true,
      columns: [
        { title: 'Region', key: 'name', sortable: true },
        { title: 'DS Count', key: 'txDis', sortable: true },
        { title: 'US Count', key: 'rxDis', sortable: true },
      ],
      data: [],
    };

    this.http.get<any[]>('/column.json').subscribe((res) => {
      console.log('API result:', res);
      this.columnTableConfig = {
        ...this.columnTableConfig,
        data: res,
      };
    });
  }
}
