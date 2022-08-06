import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestpaymentPage } from './requestpayment.page';

describe('RequestpaymentPage', () => {
  let component: RequestpaymentPage;
  let fixture: ComponentFixture<RequestpaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestpaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
