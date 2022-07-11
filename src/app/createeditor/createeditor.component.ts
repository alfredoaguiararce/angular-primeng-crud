import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchDocument } from '../models/document.model';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-createeditor',
  templateUrl: './createeditor.component.html',
  styleUrls: ['./createeditor.component.css']
})
export class CreateeditorComponent implements OnInit {
  public loading: boolean = false;
  public title: string;
  public category: string;
  public author: string;
  public dateCreated: Date;
  public languaje: string;

  // Document Template
  public addDocument: fetchDocument = {
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
    private router: Router) { }

  ngOnInit(): void {
  }

  addingDocument() {
    this.loading = !this.loading; // Deactivate inputs
    this.addDocument.title = this.title;
    this.addDocument.author = this.author;
    this.addDocument.category = this.category;
    this.addDocument.dateCreated = new Date();
    this.addDocument.languaje = this.languaje;
    console.log(this.title)
    console.log(this.category)
    console.log(this.author)
    console.log(this.dateCreated)
    console.log(this.languaje)
    this.documentService.addDocument(this.addDocument).subscribe(()=>{
      this.loading = !this.loading; // Activate Inputs
      this.router.navigate(['']); // Return to the main page
    });
  }
}
