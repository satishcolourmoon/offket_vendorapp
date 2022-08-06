import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VmEditprofilePage } from './vm-editprofile.page';

describe('VmEditprofilePage', () => {
  let component: VmEditprofilePage;
  let fixture: ComponentFixture<VmEditprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmEditprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VmEditprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
