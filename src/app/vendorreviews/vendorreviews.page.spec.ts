import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorreviewsPage } from './vendorreviews.page';

describe('VendorreviewsPage', () => {
  let component: VendorreviewsPage;
  let fixture: ComponentFixture<VendorreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
