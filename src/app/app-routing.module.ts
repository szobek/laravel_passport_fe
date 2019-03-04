import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/homescreeen'
    },
    {
        path: 'homescreeen',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
