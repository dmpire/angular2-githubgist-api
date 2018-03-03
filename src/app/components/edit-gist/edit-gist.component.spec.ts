import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGistComponent } from './edit-gist.component';

describe('EditGistComponent', () => {
  let component: EditGistComponent;
  let fixture: ComponentFixture<EditGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
