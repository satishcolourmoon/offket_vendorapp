import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VmDashboardPage } from './vm-dashboard.page';

describe('VmDashboardPage', () => {
  let component: VmDashboardPage;
  let fixture: ComponentFixture<VmDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VmDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
