import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    host: {
        class: 'block p-4'
    },
    imports: [RouterModule],
    selector: 'crx-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    title = 'angular-task';

}
