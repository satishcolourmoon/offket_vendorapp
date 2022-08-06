import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayoutsCommissionPage } from './payouts-commission.page';

describe('PayoutsCommissionPage', () => {
  let component: PayoutsCommissionPage;
  let fixture: ComponentFixture<PayoutsCommissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoutsCommissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayoutsCommissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
