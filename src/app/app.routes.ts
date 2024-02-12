import { Routes } from '@angular/router';
import { ClassmateComponent } from './classmate/classmate.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    { path: "", component: ClassmateComponent},
    { path: "**", component: ErrorPageComponent}
];
