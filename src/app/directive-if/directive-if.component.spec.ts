import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIFComponent } from './directive-if.component';

describe('DirectiveIFComponent', () => {
  let component: DirectiveIFComponent;
  let fixture: ComponentFixture<DirectiveIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
