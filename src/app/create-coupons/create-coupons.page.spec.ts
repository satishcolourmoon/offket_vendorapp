import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCouponsPage } from './create-coupons.page';

describe('CreateCouponsPage', () => {
  let component: CreateCouponsPage;
  let fixture: ComponentFixture<CreateCouponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
