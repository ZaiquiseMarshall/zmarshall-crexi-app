import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routeTransition } from './app.animations';
import { NavbarComponent } from './widgets/navbar/navbar.component';

@Component({
    imports: [RouterModule, NavbarComponent],
    selector: 'crx-root',
    templateUrl: './app.component.html',
    animations: [
        routeTransition
    ]
})
export class AppComponent {
    title = 'angular-task';
    protected route = inject(ActivatedRoute);

}
