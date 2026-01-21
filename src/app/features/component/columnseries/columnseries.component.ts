import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzTableComponent } from '../../../shared/components/nz-table/nz-table.component';
import { SharedTableConfig } from '../../../shared/components/nz-table/nz-table.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-columnseries',
  standalone: true,
  imports: [NzTableComponent, CommonModule],
  templateUrl: './columnseries.component.html',
  styleUrl: './columnseries.component.scss',
})
export class ColumnseriesComponent implements OnInit, AfterViewInit {
  @ViewChild('statusTemplate', { static: true })
  statusTemplate!: TemplateRef<any>;
  @ViewChild('regionTemplate', { static: true })
  regionTemplate!: TemplateRef<any>;
  columnTableConfig!: SharedTableConfig;
  router: any;
  rowClickable: ((row: any) => boolean) | undefined;
  constructor(private readonly http: HttpClient) {}

ngOnInit(): void {
  this.rowClickable = (row: any) => !row.isDeleted;
  this.columnTableConfig = {
    bordered: true,
    showEntries: true,
    showSearch: true,
    columns: [],   
    data: [],
  };

this.http.get<any[]>('/column.json').subscribe((res) => {
  console.log('API DATA:', res);

  this.columnTableConfig = {
    ...this.columnTableConfig,
    data: res
  };
});
}


ngAfterViewInit(): void {
  console.log('Region template:', this.regionTemplate);

  this.columnTableConfig = {
    bordered: true,
    showEntries: true,
    showSearch: true,
    columns: [
      {
        title: 'Region',
        key: 'name',
        type: 'templateRef',
        template: this.regionTemplate,
      },
      { title: 'DS Count', key: 'txDis' },
      { title: 'US Count', key: 'rxDis' },
      {
        title: 'Status',
        key: 'isDeleted',
        type: 'templateRef',
        template: this.statusTemplate,
      },
    ],
    data: [],
  };
}



  onRegionClick(row: any, event: MouseEvent) {
    event.stopPropagation();

    if (row.isDeleted) {
      console.log('Deleted row - no action');
      return;
    }

    console.log('Region clicked:', row.name);
  }
}
