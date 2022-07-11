import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeditorComponent } from './createeditor.component';

describe('CreateeditorComponent', () => {
  let component: CreateeditorComponent;
  let fixture: ComponentFixture<CreateeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
