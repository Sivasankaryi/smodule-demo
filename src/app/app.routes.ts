import { Routes } from '@angular/router';
import { ColumnseriesComponent } from './features/component/columnseries/columnseries.component';
import { PonCapacityComponent } from './features/component/pon-capacity/pon-capacity.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { HomeComponent } from './features/component/home/home.component';

export const routes: Routes = [
    {
        path:'columnseries',component:ColumnseriesComponent
    },
    {
        path:'pon',component:PonCapacityComponent
    },
    {
        path:'details/:id',component:DetailsComponent
    },
   {
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}
];
