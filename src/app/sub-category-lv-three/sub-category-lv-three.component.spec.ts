import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryLvThreeComponent } from './sub-category-lv-three.component';

describe('SubCategoryLvThreeComponent', () => {
  let component: SubCategoryLvThreeComponent;
  let fixture: ComponentFixture<SubCategoryLvThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryLvThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryLvThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
