import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchDocument } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

/**
 * This component is a form used for update a document based on Id, getting from url -> documents/edit/:id
 */
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  // public loading: boolean = false;

  // Create template for new document, prevent that UI crash when it's waiting for get the id.
  newDocumentForm = new FormGroup({
    author: new FormControl('', Validators.required),
    category : new FormControl('', Validators.required),
    dateCreated: new FormControl('', Validators.required),
    languaje: new FormControl('', Validators.required),
    title: new FormControl('' ,Validators.required),
  });      

  public documentId: string;

  // Initialized as an empty object to avoid breaking the view when loading its data.
  public editableDocument: fetchDocument = {
    isActive: true,
    title: "",
    category: "",
    author: "",
    dateCreated: new Date(),
    languaje: "",
  }

/**
 * 
 * @param route - Used for getting the param 'id'.
 * @param documentService - Used for retrieving the selected document based on their id.
 * @param router - Used for back in navegation one time is saved the update.
 * @param datepipe - Used to format dates.
 */

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router,
    public datepipe: DatePipe) 
    { 
      // Get the id passed through url
      this.documentId = this.route.snapshot.paramMap.get('id');
      
      // Load single Document data based in their id.
      this.documentService.getDocumentById(Number(this.documentId)).subscribe(
        document =>{
          // One time we have the response(DOCUMENT), load in to the editable(fetchDocument).
          this.editableDocument = document;
          // Load texts in form as a preview of current values.
          this.loadFormPreview();    
        }
      );
    }

  ngOnInit(): void {
    console.log('Current document : ' + this.editableDocument)
    console.log('Current document id:' + this.documentId)
  }
  

  /**
   * Call to service, updating the Document.
   */
  public updateDocument(): void{
    if(this.newDocumentForm.valid)
    {
      this.createDTO();
      // Use service to update Document
      this.documentService.updateDocument(this.editableDocument).subscribe(()=>{
        // When document was updated, move to /documents
        this.router.navigate(['/documents']);
      });
    }
    else
    {
      alert("Please complete the information");
    }
  }

  /**
   * Create Data Tranfer Object.
   * by passing data from Form to Document obj.
   */
  private createDTO(): void {
    this.editableDocument.title = this.newDocumentForm.value.title;
    this.editableDocument.author = this.newDocumentForm.value.author;
    this.editableDocument.languaje = this.newDocumentForm.value.languaje;
    this.editableDocument.category = this.newDocumentForm.value.category;
    this.editableDocument.dateCreated = this.newDocumentForm.value.dateCreated;
  }

  /**
   * load inputs with the current values of the Document
   */
  private loadFormPreview(): void {
    this.newDocumentForm.setControl('author', new FormControl(this.editableDocument.author, Validators.required));
    this.newDocumentForm.setControl('category', new FormControl(this.editableDocument.category, Validators.required));
    this.newDocumentForm.setControl('dateCreated', new FormControl(this.datepipe.transform(this.editableDocument.dateCreated, 'yyyy-MM-dd'), Validators.required));
    this.newDocumentForm.setControl('languaje', new FormControl(this.editableDocument.languaje, Validators.required));
    this.newDocumentForm.setControl('title', new FormControl(this.editableDocument.title, Validators.required));
  }




}
