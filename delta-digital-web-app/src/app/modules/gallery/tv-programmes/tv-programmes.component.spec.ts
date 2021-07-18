import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProgrammesComponent } from './tv-programmes.component';

describe('TvProgrammesComponent', () => {
  let component: TvProgrammesComponent;
  let fixture: ComponentFixture<TvProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvProgrammesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
