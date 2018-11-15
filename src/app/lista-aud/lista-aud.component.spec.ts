import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAudComponent } from './lista-aud.component';

describe('ListaAudComponent', () => {
  let component: ListaAudComponent;
  let fixture: ComponentFixture<ListaAudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
