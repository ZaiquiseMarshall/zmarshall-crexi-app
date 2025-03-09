import { Route } from '@angular/router';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { UserHomeComponent } from './views/user-home/user-home.component';

export const appRoutes: Route[] = [
    { path: 'home', component: UserHomeComponent, title: 'Home' },
    { path: 'users/:id', component: UserProfileComponent, title: 'User Profile' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
