import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulListComponent } from './beautiful-list.component';

describe('BeautifulListComponent', () => {
  let component: BeautifulListComponent;
  let fixture: ComponentFixture<BeautifulListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
