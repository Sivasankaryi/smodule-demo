import { TemplateRef } from '@angular/core';
import { NzTableSize } from 'ng-zorro-antd/table';
export interface TableColumn {
  title: string;
  key: string;
  align?: 'left';
  sortable?:boolean;
}

export interface SharedTableConfig {
  columns: TableColumn[];
  bordered?: boolean; 
  size?: NzTableSize;
  data: any[];
  cellTemplate?: TemplateRef<any>;
}
