import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { ActivatedRoute, provideRouter, RouterModule } from '@angular/router';
import { UserService } from '@angular-task/user-service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';

describe('UserProfileComponent', () => {
    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;

    beforeEach(async () => {

      await TestBed.configureTestingModule({
          imports: [UserProfileComponent, NavbarComponent, RouterModule.forRoot([])],
          providers: [
            { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } },
            provideRouter([]),
            provideHttpClient(),
            provideHttpClientTesting(),
            UserService],
      }).compileComponents();

      fixture = TestBed.createComponent(UserProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
