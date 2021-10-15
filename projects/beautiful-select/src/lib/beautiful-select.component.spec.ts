import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulSelectComponent } from './beautiful-select.component';

describe('BeautifulSelectComponent', () => {
  let component: BeautifulSelectComponent;
  let fixture: ComponentFixture<BeautifulSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifulSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
