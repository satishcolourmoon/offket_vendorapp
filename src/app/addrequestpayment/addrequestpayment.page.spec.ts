import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddrequestpaymentPage } from './addrequestpayment.page';

describe('AddrequestpaymentPage', () => {
  let component: AddrequestpaymentPage;
  let fixture: ComponentFixture<AddrequestpaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestpaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrequestpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
