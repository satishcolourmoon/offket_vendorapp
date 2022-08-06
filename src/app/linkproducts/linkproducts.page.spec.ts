import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinkproductsPage } from './linkproducts.page';

describe('LinkproductsPage', () => {
  let component: LinkproductsPage;
  let fixture: ComponentFixture<LinkproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
