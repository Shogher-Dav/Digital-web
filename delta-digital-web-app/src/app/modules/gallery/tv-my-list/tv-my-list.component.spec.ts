import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMyListComponent } from './tv-my-list.component';

describe('TvMyListComponent', () => {
  let component: TvMyListComponent;
  let fixture: ComponentFixture<TvMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
