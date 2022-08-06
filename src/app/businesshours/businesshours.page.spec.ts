import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinesshoursPage } from './businesshours.page';

describe('BusinesshoursPage', () => {
  let component: BusinesshoursPage;
  let fixture: ComponentFixture<BusinesshoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesshoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinesshoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
