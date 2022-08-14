import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListRenderComponent } from './table-list-render.component';

describe('TableListRenderComponent', () => {
  let component: TableListRenderComponent;
  let fixture: ComponentFixture<TableListRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
