import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingproductPage } from './existingproduct.page';

describe('ExistingproductPage', () => {
  let component: ExistingproductPage;
  let fixture: ComponentFixture<ExistingproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
