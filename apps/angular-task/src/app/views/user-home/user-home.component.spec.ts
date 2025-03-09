import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserHomeComponent } from './user-home.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from '@angular-task/user-service';
import { provideHttpClient } from '@angular/common/http';

describe('UserHomeComponent', () => {
    let component: UserHomeComponent;
    let fixture: ComponentFixture<UserHomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserHomeComponent],
            providers: [UserService, provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();

        fixture = TestBed.createComponent(UserHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
