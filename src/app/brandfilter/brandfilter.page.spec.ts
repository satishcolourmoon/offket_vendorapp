import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandfilterPage } from './brandfilter.page';

describe('BrandfilterPage', () => {
  let component: BrandfilterPage;
  let fixture: ComponentFixture<BrandfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandfilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
