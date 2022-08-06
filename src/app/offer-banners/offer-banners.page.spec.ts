import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferBannersPage } from './offer-banners.page';

describe('OfferBannersPage', () => {
  let component: OfferBannersPage;
  let fixture: ComponentFixture<OfferBannersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBannersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBannersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
