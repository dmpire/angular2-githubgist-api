import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGistComponent } from './list-gist.component';

describe('ListGistComponent', () => {
  let component: ListGistComponent;
  let fixture: ComponentFixture<ListGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
