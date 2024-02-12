import { Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';


export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'register', component: CreateRegistrationComponent },
    {path:'List', component: RegistrationListComponent},
];
