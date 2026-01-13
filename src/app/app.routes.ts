import { Routes } from '@angular/router';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { ColumnseriesComponent } from './features/component/columnseries/columnseries.component';
import { PonCapacityComponent } from './features/component/pon-capacity/pon-capacity.component';

export const routes: Routes = [
    {
        path:'columnseries',component:ColumnseriesComponent
    },
    {
        path:'pon',component:PonCapacityComponent
    }
];
