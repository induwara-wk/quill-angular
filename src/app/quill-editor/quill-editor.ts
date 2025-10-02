import { Component } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  standalone: false,
  templateUrl: './quill-editor.html',
  styleUrl: './quill-editor.css'
})
export class QuillEditor {
  editorContent = '';
}
