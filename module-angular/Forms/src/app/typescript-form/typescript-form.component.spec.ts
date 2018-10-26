import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptFormComponent } from './typescript-form.component';

describe('TypescriptFormComponent', () => {
  let component: TypescriptFormComponent;
  let fixture: ComponentFixture<TypescriptFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
