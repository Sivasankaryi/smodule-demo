import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { SharedTableConfig } from './nz-table.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nz-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, FormsModule],
  templateUrl: './nz-table.component.html',
})
export class NzTableComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50, -1];

  sortKey: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';

  searchText = '';

  viewData: any[] = [];
  sourceData: any[] = [];

  private _config!: SharedTableConfig;
  @Input() rowClickable?: (row: any) => boolean;
  @Input({ required: true })
  set config(value: SharedTableConfig) {
    if (!value) return;

    this._config = value;

    this.sourceData = [...(value.data ?? [])];
    this.viewData = [...this.sourceData];

    console.log('Table config updated:', value);
  }

  get config(): SharedTableConfig {
    return this._config;
  }

  @Input() noResultTemplate?: TemplateRef<any>;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.sourceData = [...(this.config?.data ?? [])];
    this.viewData = [...this.sourceData];
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

    this.viewData = this.sourceData.filter((row) =>
      this.config.columns.some((col) => {
        const value = this.getNestedValue(row, col.key);
        return (
          value !== null &&
          value !== undefined &&
          String(value).toLowerCase().includes(text)
        );
      }),
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

  onPageSizeChange(size: number) {
    this.pageIndex = 1;
    this.pageSize = size;
  }

  get startEntry(): number {
    if (!this.viewData?.length) return 0;
    return this.pageSize === -1 ? 1 : (this.pageIndex - 1) * this.pageSize + 1;
  }

  get endEntry(): number {
    if (!this.viewData?.length) return 0;
    return this.pageSize === -1
      ? this.viewData.length
      : Math.min(this.pageIndex * this.pageSize, this.viewData.length);
  }

  onRowClick(row: any) {
    if (this.isRowClickable && !this.isRowClickable(row)) {
      console.log('Row is not clickable:', row);
      return;
    }
    const id = row.id || row.systemId || row.regionId || row.locationId;
    if (!id) return;
    this.router.navigate(['/details', id], { state: { rowData: row } });
  }
  isRowClickable(row: any): boolean {
    return !row.isDeleted;
  }
}
