import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectdeliveryBoyPage } from './selectdelivery-boy.page';

describe('SelectdeliveryBoyPage', () => {
  let component: SelectdeliveryBoyPage;
  let fixture: ComponentFixture<SelectdeliveryBoyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdeliveryBoyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectdeliveryBoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
