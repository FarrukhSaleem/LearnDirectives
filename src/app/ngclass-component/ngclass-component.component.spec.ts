import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGClassComponentComponent } from './ngclass-component.component';

describe('NGClassComponentComponent', () => {
  let component: NGClassComponentComponent;
  let fixture: ComponentFixture<NGClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGClassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
