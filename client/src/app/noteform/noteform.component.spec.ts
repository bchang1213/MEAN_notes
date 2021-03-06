import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteformComponent } from './noteform.component';

describe('NoteformComponent', () => {
  let component: NoteformComponent;
  let fixture: ComponentFixture<NoteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
