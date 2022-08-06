import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestNewProductPage } from './request-new-product.page';

describe('RequestNewProductPage', () => {
  let component: RequestNewProductPage;
  let fixture: ComponentFixture<RequestNewProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestNewProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
