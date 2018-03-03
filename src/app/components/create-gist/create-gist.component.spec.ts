import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGistComponent } from './create-gist.component';

describe('CreateGistComponent', () => {
  let component: CreateGistComponent;
  let fixture: ComponentFixture<CreateGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
