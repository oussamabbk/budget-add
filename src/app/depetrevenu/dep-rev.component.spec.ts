import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DepRevComponent } from "./dep-rev.component";

describe("UserProfileComponent", () => {
  let component: DepRevComponent;
  let fixture: ComponentFixture<DepRevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepRevComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
