import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddvariantPage } from './addvariant.page';

describe('AddvariantPage', () => {
  let component: AddvariantPage;
  let fixture: ComponentFixture<AddvariantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvariantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddvariantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
