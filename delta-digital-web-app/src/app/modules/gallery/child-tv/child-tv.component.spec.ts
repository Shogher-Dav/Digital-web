import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTvComponent } from './child-tv.component';

describe('ChildTvComponent', () => {
  let component: ChildTvComponent;
  let fixture: ComponentFixture<ChildTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
