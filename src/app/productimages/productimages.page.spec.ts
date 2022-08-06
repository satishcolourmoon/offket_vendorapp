import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductimagesPage } from './productimages.page';

describe('ProductimagesPage', () => {
  let component: ProductimagesPage;
  let fixture: ComponentFixture<ProductimagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductimagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductimagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
