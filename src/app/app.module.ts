import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

import { DetailsEditorComponent } from './details-editor/details-editor.component';
import { RequiredEditorComponent } from './required-editor/required-editor.component';
import { PhotosEditorComponent } from './photos-editor/photos-editor.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DetailsEditorComponent,
    RequiredEditorComponent,
    PhotosEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    // other imports ...
    ReactiveFormsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
