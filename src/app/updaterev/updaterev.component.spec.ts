import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterevComponent } from './updaterev.component';

describe('UpdaterevComponent', () => {
  let component: UpdaterevComponent;
  let fixture: ComponentFixture<UpdaterevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
