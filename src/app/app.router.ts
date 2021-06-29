import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent ,
    },
    { path: '**', component: DashboardComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );