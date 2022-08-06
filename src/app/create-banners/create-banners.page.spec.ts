import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBannersPage } from './create-banners.page';

describe('CreateBannersPage', () => {
  let component: CreateBannersPage;
  let fixture: ComponentFixture<CreateBannersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBannersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBannersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
