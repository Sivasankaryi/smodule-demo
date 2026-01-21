import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedTableConfig } from '../../../shared/components/nz-table/nz-table.modal';
import { NzTableComponent } from "../../../shared/components/nz-table/nz-table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pon-capacity',
  templateUrl: './pon-capacity.component.html',
  imports: [NzTableComponent,CommonModule],
  standalone: true
})
export class PonCapacityComponent implements OnInit {

  ponTableConfig!: SharedTableConfig;

  @ViewChild('customCell', { static: true })
  cellTemplate!: TemplateRef<any>;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.ponTableConfig = {
      bordered: true,
        //  showEntries: true,
    showSearch: true,
      columns: [
        { title: 'Region', key: 'regionName', sortable: true },
        { title: 'Location', key: 'locationName', sortable: true },
        { title: 'System', key: 'systemName', sortable: true },
        { title: 'DS Util', key: 'dsUtilExCnt', sortable: true },
        { title: 'US Util', key: 'usUtilExCnt', sortable: true },
        { title: 'Interface', key: 'interface', sortable: false }
      ],
      data: [],
    };

    this.http.get<any[]>('/pon.json').subscribe(res => {
      this.ponTableConfig = {
        ...this.ponTableConfig,
        data: res
      };
    });
  }
}
