import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainConfigComponent } from './profile-main-config.component';

describe('ProfileMainConfigComponent', () => {
  let component: ProfileMainConfigComponent;
  let fixture: ComponentFixture<ProfileMainConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
