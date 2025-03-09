import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { lastValueFrom, Observable, retry, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  #http = inject(HttpClient);
  #loadedUsers = signal<User[]>([]);
  readonly #url: string = 'https://jsonplaceholder.typicode.com/users';
  readonly getloadedUsers = computed(this.#loadedUsers);

  // [ Initial Call To Return All Users ]
  init = effect(() => {
    this.#loadUsers();
  });

  // [ Async Method To Set Initial Users Signal ]
  async #loadUsers() {
    const initUsers = await lastValueFrom(this.#getUsers());
    this.#loadedUsers.update(users => [...users, ...initUsers]);
  }

  // [ API Call To Return All Users ]
  #getUsers(): Observable<User[]> {
    return this.#http.get<User[]>(this.#url).pipe(
        retry(3),
        tap((users) => users.forEach((user) => user.isFavorite = false))
    );
  }

  // [ Favorite A User ]
  public setFavorite(id: number) {
    this.#loadedUsers.update(users =>
      users.map(user =>
        user.id === id ? { ...user, isFavorite: true } : user
      )
    );
  }

  // [ Unfavorite A User ]
  public unFavorite(id: number) {
    this.#loadedUsers.update(users =>
      users.map(user =>
        user.id === id ? { ...user, isFavorite: false } : user
      )
    );
  }

  // [ Return A Signle User By ID ]
  public getUserById(userId: number): User[] {
    return this.#loadedUsers().filter(({ id }) => id === userId);
  }

  // [ Return Favorites ]
  public getFavoriteUsers(): User[] {
    return this.#loadedUsers().filter(({ isFavorite }) => isFavorite === true);
  }
}
