import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'required' | 'details' | 'photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // editor: EditorType = 'required';
  editor: EditorType = 'photos';

  // get showNameEditor() {
  //   return this.editor === 'name';
  // }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showRequiredEditor() {
    return this.editor === 'required';
  }
  get showDetailsEditor() {
    return this.editor === 'details';
  }
  get showPhotosEditor() {
    return this.editor === 'photos';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
