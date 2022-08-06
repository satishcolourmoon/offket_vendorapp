import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatepricePage } from './updateprice.page';

describe('UpdatepricePage', () => {
  let component: UpdatepricePage;
  let fixture: ComponentFixture<UpdatepricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatepricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
