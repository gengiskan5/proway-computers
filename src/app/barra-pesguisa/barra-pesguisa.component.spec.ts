import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesguisaComponent } from './barra-pesguisa.component';

describe('BarraPesguisaComponent', () => {
  let component: BarraPesguisaComponent;
  let fixture: ComponentFixture<BarraPesguisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPesguisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPesguisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
