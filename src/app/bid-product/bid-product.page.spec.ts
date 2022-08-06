import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidProductPage } from './bid-product.page';

describe('BidProductPage', () => {
  let component: BidProductPage;
  let fixture: ComponentFixture<BidProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
