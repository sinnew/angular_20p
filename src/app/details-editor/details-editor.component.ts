import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-editor',
  templateUrl: './details-editor.component.html',
  styleUrls: ['./details-editor.component.css'],
})
export class DetailsEditorComponent {
  conditions = [
    'A+: new',
    'A: good as new',
    'B+: slightly used',
    'B: used',
    'C+: need some fixing',
    'C: broken',
    'D: you might salvage',
  ];

  constructor(private fb: FormBuilder) {}
  popup = false;

  detailsForm = this.fb.group({
    size: [''],
    purchased: [''],
    condition: [''],
    reference: [''],
    tags: [''],
  });

  onSubmit() {
    this.popup = true;
    console.warn(this.detailsForm.value);
  }
}
