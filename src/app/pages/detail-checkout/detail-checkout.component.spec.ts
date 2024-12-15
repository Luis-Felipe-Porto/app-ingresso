import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCheckoutComponent } from './detail-checkout.component';

describe('DetailCheckoutComponent', () => {
  let component: DetailCheckoutComponent;
  let fixture: ComponentFixture<DetailCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
