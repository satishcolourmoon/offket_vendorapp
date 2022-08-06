import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypackagePage } from './mypackage.page';

describe('MypackagePage', () => {
  let component: MypackagePage;
  let fixture: ComponentFixture<MypackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
