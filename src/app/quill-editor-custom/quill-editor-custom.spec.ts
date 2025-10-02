import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillEditorCustom } from './quill-editor-custom';

describe('QuillEditorCustom', () => {
  let component: QuillEditorCustom;
  let fixture: ComponentFixture<QuillEditorCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuillEditorCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuillEditorCustom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
