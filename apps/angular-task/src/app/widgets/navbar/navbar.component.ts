import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'crx-navbar',
    imports: [CommonModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  #router = inject(Router);
  protected showBackBtn = this.#router.events.pipe(
    filter((ev) => ev instanceof NavigationEnd),
    map((ev) => ev.url.includes('users'))
  );
}
