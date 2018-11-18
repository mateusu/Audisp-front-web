import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudEditorComponent } from './aud-editor.component';

describe('AudEditorComponent', () => {
  let component: AudEditorComponent;
  let fixture: ComponentFixture<AudEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
