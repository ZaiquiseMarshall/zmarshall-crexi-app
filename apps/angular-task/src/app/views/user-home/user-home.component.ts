import { CardComponent } from '@angular-task/card';
import { UserService } from '@angular-task/user-service';
import { ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
  computed, signal,
  effect,
  ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { User } from '@angular-task/user-model';
import { FormsModule } from '@angular/forms';
import { elementTransitions } from '../../app.animations';

@Component({
    selector: 'crx-user-home',
    imports: [CommonModule, CardComponent, MatIconModule, RouterLink, FormsModule],
    templateUrl: './user-home.component.html',
    styleUrl: './user-home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
    animations: [
      elementTransitions
    ]
})
export class UserHomeComponent {
    @ViewChild('profileControlCenter') profileControlCenter: ElementRef | undefined;
    #userService = inject(UserService);
    #router = inject(Router);
    protected query = '';
    protected getAllUsers = computed(() => this.#userService.getloadedUsers());
    protected favoriteUsers = computed(() => this.getAllUsers().filter(({ isFavorite }) => isFavorite === true));
    protected allUsers = signal<User[]>([]);

    constructor () {
      effect(() => {
        this.getAllUsers();
        this.allUsers.set(this.getAllUsers());
      });
    }

    favorite (id: number) {
      this.#userService.setFavorite(id);
    }

    unfavorite (id: number) {
      this.#userService.unFavorite(id);
    }

    viewProfile (id: number) {
      this.#router.navigateByUrl(`users/${id}`);
    }

    filterUsers () {
      const data = computed(() =>
      this.filterByCriteria(this.getAllUsers()));
      this.allUsers.set(data());
    }

    resetFilter () {
      this.query = '';
      this.allUsers.set(this.getAllUsers());
    }

    filterByCriteria (users: User[]) {
      return users.filter(({ name, username, email, website, phone }) =>
        Object.keys(({ name, username, email, website, phone })).some((key) =>
          ({ name, username, email, website, phone })[key]?.toLowerCase().includes(this.query.toLowerCase())));
    }

    viewAllFavorites () {
      this.allUsers.set(this.favoriteUsers());
      this.profileControlCenter?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

}
