import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRendererComponent } from './basic-renderer.component';

describe('BasicRendererComponent', () => {
  let component: BasicRendererComponent;
  let fixture: ComponentFixture<BasicRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
