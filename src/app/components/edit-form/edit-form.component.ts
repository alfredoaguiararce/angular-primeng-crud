import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchDocument } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  // public loading: boolean = false;
  newDocumentForm = new FormGroup({
    title: new FormControl('' ,Validators.required),
    category : new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    dateCreated: new FormControl('', Validators.required),
    languaje: new FormControl('', Validators.required),
  });      

  public documentId: string;
  public editableDocument: fetchDocument = {
    isActive: true,
    title: "",
    category: "",
    author: "",
    dateCreated: new Date(),
    languaje: "",
  }


  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router,
    public datepipe: DatePipe) { 
      
      this.documentId = this.route.snapshot.paramMap.get('id');    
      this.documentService.getDocumentById(Number(this.documentId)).subscribe(document =>
        {
          this.editableDocument = document;
          this.newDocumentForm = new FormGroup({
            title: new FormControl(this.editableDocument.title ,Validators.required),
            category : new FormControl(this.editableDocument.category, Validators.required),
            author: new FormControl(this.editableDocument.author, Validators.required),
            dateCreated: new FormControl(this.datepipe.transform(this.editableDocument.dateCreated, 'yyyy-MM-dd'), Validators.required),
            languaje: new FormControl(this.editableDocument.languaje, Validators.required),
          });     
        }
      );
    }

  ngOnInit(): void {
    console.log(this.editableDocument)
    console.log(this.documentId)
  }

  updateDocument() {
    // deactivate the inputs
    if(this.newDocumentForm.valid)
    {
      this.editableDocument.title = this.newDocumentForm.value.title;
      this.editableDocument.author = this.newDocumentForm.value.author;
      this.editableDocument.languaje = this.newDocumentForm.value.languaje;
      this.editableDocument.category = this.newDocumentForm.value.category;
      this.editableDocument.dateCreated = this.newDocumentForm.value.dateCreated;

      this.documentService.updateDocument(this.editableDocument).subscribe(()=>{
        this.router.navigate(['/documents']);
      });
    }
    else
    {
      alert("Please complete the information");
    }
  }




}
