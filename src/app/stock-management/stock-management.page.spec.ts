import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockManagementPage } from './stock-management.page';

describe('StockManagementPage', () => {
  let component: StockManagementPage;
  let fixture: ComponentFixture<StockManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
