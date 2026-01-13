import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { SharedTableConfig } from './nz-table.modal';

@Component({
  selector: 'app-nz-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, FormsModule],
  templateUrl: './nz-table.component.html'
})
export class NzTableComponent implements OnInit {

  private _config!: SharedTableConfig;

  @Input({ required: true })
  set config(value: SharedTableConfig) {
    this._config = value;
    this.sourceData = [...(value?.data ?? [])];
    this.viewData = [...this.sourceData];
    console.log('Updated viewData:', this.viewData);
  }

  get config(): SharedTableConfig {
    return this._config;
  }

  pageIndex = 1;
  pageSize = 10;

  sortKey: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';
  searchText = '';
  viewData: any[] = [];
  sourceData: any[] = [];

  ngOnInit() {
    this.sourceData = [...(this.config?.data ?? [])];
    this.viewData = [...this.sourceData];
    console.log('viewData:', this.viewData);
  }

  getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
  }
  

applySearch() {
  const text = this.searchText.toLowerCase().trim();

  if (!text) {
    this.viewData = [...this.sourceData];
    return;
  }

  this.viewData = this.sourceData.filter(row =>
    this.config.columns.some(col => {
      const value = this.getNestedValue(row, col.key);
      return (
        value !== null &&
        value !== undefined &&
        String(value).toLowerCase().includes(text)
      );
    })
  );

  if (this.sortKey) {
    this.sort(this.sortKey);
  }
}

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }

    this.viewData = [...this.viewData].sort((a, b) => {
      const aVal = this.getNestedValue(a, key);
      const bVal = this.getNestedValue(b, key);
      if (aVal > bVal) return this.sortOrder === 'asc' ? 1 : -1;
      if (aVal < bVal) return this.sortOrder === 'asc' ? -1 : 1;
      return 0;
    });
  }
}
