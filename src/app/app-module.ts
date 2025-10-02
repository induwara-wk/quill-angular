import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { QuillModule } from 'ngx-quill';
import { QuillEditor } from './quill-editor/quill-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    QuillEditor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
