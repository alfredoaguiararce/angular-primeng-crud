import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fetchDocument } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  private newDocument: fetchDocument;
  newDocumentForm = new FormGroup({
    title: new FormControl('',Validators.required),
    category : new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    dateCreated: new FormControl('', Validators.required),
    languaje: new FormControl('', Validators.required),
  });

  constructor(
    private documentService: DocumentService,
    private router: Router) { }
  ngOnInit(): void {
  }

  submit() 
  {
    if(this.newDocumentForm.valid)
    {
      this.newDocument = {
        title: this.newDocumentForm.value.title,
        category: this.newDocumentForm.value.category,
        author: this.newDocumentForm.value.author,
        languaje: this.newDocumentForm.value.languaje,
        dateCreated: this.newDocumentForm.value.dateCreated,
        isActive: true,
      };

      this.documentService.addDocument(this.newDocument).subscribe(()=>{
        console.log('New Document created.')
        console.log(this.newDocumentForm.value);
        this.router.navigate(['']);
      });
    }
    else
    {
      alert("Please complete the information");
    }
  }
}
