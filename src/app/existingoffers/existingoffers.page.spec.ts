import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingoffersPage } from './existingoffers.page';

describe('ExistingoffersPage', () => {
  let component: ExistingoffersPage;
  let fixture: ComponentFixture<ExistingoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
