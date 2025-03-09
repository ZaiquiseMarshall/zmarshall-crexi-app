import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-task/user-model';

@Component({
    selector: 'crx-user-info-card',
    imports: [CommonModule],
    templateUrl: './user-info-card.component.html',
    styleUrl: './user-info-card.component.css',
})
export class UserInfoCardComponent {
   public readonly cardInfo = input<User[]>();

}
