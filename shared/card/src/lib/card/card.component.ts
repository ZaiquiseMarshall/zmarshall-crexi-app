import { User } from '@angular-task/user-model';
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'lib-card',
    imports: [CommonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    public readonly cardInfo = input<User>();
    public favoriteAction = output<number>();
    public unfavoriteAction = output<number>();
    public cardButtonAction = output<number>();
    public cardButtonNText = input('');

    favorite (id: number) {
      this.favoriteAction.emit(id);
    }

    unfavorite (id: number) {
      this.unfavoriteAction.emit(id);
    }

    cardButton (id: number) {
      this.cardButtonAction.emit(id);
    }

}
