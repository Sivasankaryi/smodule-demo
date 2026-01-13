import { NzTableSize } from 'ng-zorro-antd/table';

// For dumy data demo. 
// export interface NzTableColumn {
//   title: string;
//   key: string;
//   sortable?: boolean;
//   filterable?: boolean;
//   width?: string | null;
// align?: 'left' | 'center' | 'right' | null;
// }

// export interface NzTableConfig {
//   columns: NzTableColumn[];
//   data: any[];
//   loading?: boolean;
//   bordered?: boolean;
//   size?: NzTableSize;
//   scroll?: { x: string | null; y: string | undefined };
// }

// For Actual API data 

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
}
