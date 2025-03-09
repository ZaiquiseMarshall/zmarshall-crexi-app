import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserService } from '@angular-task/user-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let animatedEl: HTMLDivElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterModule.forRoot([]), BrowserAnimationsModule],
            providers: [UserService]
        })
        .compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const el = fixture.nativeElement;
        animatedEl = el.querySelector('.view-wrapper');
    });

    it('should render navbar', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('crx-navbar')).toBeTruthy();
    });

    it(`should have as title 'angular-task'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-task');

    });

});
