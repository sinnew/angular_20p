import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-required-editor',
  templateUrl: './required-editor.component.html',
  styleUrls: ['./required-editor.component.css'],
})
export class RequiredEditorComponent {
  // is there API or data base from G?
  locations = ['US', 'Japan', 'India', 'China', 'German'];
  categories = ['Electronic', 'Furniture', 'Clothes', 'Vehicle', 'Book'];
  // sub-categories
  shippings = ['in-person', 'office mailbox', 'mail/package'];

  constructor(private fb: FormBuilder) {}

  popup = false;

  requiredForm = this.fb.group({
    title: [''],
    price: [''],
    category: [''],
    shipping: [''],
    location: [''],
    contact: [''],
  });

  onSubmit() {
    this.popup = true;
    console.warn(this.requiredForm.value);
  }
}
