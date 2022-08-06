import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserreviewsPage } from './userreviews.page';

describe('UserreviewsPage', () => {
  let component: UserreviewsPage;
  let fixture: ComponentFixture<UserreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
