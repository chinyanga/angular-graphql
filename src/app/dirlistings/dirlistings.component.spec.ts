import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirlistingsComponent } from './dirlistings.component';

describe('DirlistingsComponent', () => {
  let component: DirlistingsComponent;
  let fixture: ComponentFixture<DirlistingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirlistingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
