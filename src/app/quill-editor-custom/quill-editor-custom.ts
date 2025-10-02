import { Component } from '@angular/core';

@Component({
  selector: 'app-quill-editor-custom',
  standalone: false,
  templateUrl: './quill-editor-custom.html',
  styleUrl: './quill-editor-custom.css'
})
export class QuillEditorCustom {
editorContent: any = null;

modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': 1 }, { 'header': 2 }, {'header': 3 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ]
};

formats = ['header', 'list', 'indent', 'color', 'background', 'align', 'bold', 'italic', 'underline', 'strike', 'link', 'image'];
}
