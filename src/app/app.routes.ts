import { Routes } from '@angular/Router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const appRoute: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];