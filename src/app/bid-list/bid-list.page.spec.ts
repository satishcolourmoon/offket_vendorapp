import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidListPage } from './bid-list.page';

describe('BidListPage', () => {
  let component: BidListPage;
  let fixture: ComponentFixture<BidListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
