import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from './../services/file-upload.service';

@Component({
  selector: 'app-photos-editor',
  templateUrl: './photos-editor.component.html',
  styleUrls: ['./photos-editor.component.css'],
})
export class PhotosEditorComponent implements OnInit {
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(
    private uploadService: FileUploadService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }

  registrationForm = this.fb.group({
    file: [null],
  });

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      // this.uploadService.upload(file).subscribe(
      //   (event: any) => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.progressInfos[idx].value = Math.round(
      //         (100 * event.loaded) / event.total
      //       );
      //     } else if (event instanceof HttpResponse) {
      //       const msg = 'Uploaded the file successfully: ' + file.name;
      //       this.message.push(msg);
      //       this.imageInfos = this.uploadService.getFiles();
      //     }
      //   },
      //   (err: any) => {
      //     this.progressInfos[idx].value = 0;
      //     const msg = 'Could not upload the file: ' + file.name;
      //     this.message.push(msg);
      //     this.message.push('testing');
      //     this.message.push(err);
      //   }
      // );
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      console.log('uploading file===');
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
}
