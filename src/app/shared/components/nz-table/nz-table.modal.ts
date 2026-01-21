import { TemplateRef } from '@angular/core';
export type ColumnType = 'text' | 'templateRef';

export interface TableColumn {
  title: string;
  key: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  type?: ColumnType;
  template?: TemplateRef<any> | null;
}

export interface SharedTableConfig {
  columns: TableColumn[];
  data: any[];
  bordered?: boolean;
  showEntries?: boolean;
showSearch?: boolean;
}
