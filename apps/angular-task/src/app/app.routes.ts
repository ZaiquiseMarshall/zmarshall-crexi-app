import { Route } from '@angular/router';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { UserHomeComponent } from './views/user-home/user-home.component';

export const appRoutes: Route[] = [
    { path: '', component: UserHomeComponent },
    { path: 'user/:id', component: UserProfileComponent }
];
