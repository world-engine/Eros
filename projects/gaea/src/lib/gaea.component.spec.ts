import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaeaComponent } from './gaea.component';

describe('GaeaComponent', () => {
  let component: GaeaComponent;
  let fixture: ComponentFixture<GaeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
