import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@angular-task/user-service';
import { UserInfoCardComponent } from '../../widgets/user-info-card/user-info-card.component';

@Component({
    selector: 'crx-user-profile',
    imports: [CommonModule, UserInfoCardComponent],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
    #router = inject(ActivatedRoute);
    #userService = inject(UserService);
    userId = this.#router.snapshot.paramMap.get('id');
    protected currentUser = computed(() =>
      this.#userService.getloadedUsers().filter(({ id }) =>
        id === parseInt(this.userId ?? '')));

    favorite (id: number) {
     this.#userService.setFavorite(id);
    }

    unfavorite (id: number) {
     this.#userService.unFavorite(id);
    }

}
