import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChanelListComponent } from "./chanel-list.component";

describe("ChanelListComponent", () => {
  let component: ChanelListComponent;
  let fixture: ComponentFixture<ChanelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
