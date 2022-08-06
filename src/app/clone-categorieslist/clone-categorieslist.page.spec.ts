import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloneCategorieslistPage } from './clone-categorieslist.page';

describe('CloneCategorieslistPage', () => {
  let component: CloneCategorieslistPage;
  let fixture: ComponentFixture<CloneCategorieslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneCategorieslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloneCategorieslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
