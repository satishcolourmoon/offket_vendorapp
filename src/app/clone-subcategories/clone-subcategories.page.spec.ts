import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloneSubcategoriesPage } from './clone-subcategories.page';

describe('CloneSubcategoriesPage', () => {
  let component: CloneSubcategoriesPage;
  let fixture: ComponentFixture<CloneSubcategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneSubcategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloneSubcategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
