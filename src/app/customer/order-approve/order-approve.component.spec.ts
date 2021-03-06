import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderApproveComponent } from './order-approve.component';

describe('OrderApproveComponent', () => {
  let component: OrderApproveComponent;
  let fixture: ComponentFixture<OrderApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
