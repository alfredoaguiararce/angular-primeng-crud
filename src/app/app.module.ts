import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DocumentDataInMemService } from './services/document-data-in-mem.service';
import { HttpClientModule } from '@angular/common/http';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { EditorComponent } from './components/editor/editor.component';

// Primeng modules
import {ButtonModule} from 'primeng/button';
import { TableModule } from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule, } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    DocumentTableComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Use this to fake oir API
    InMemoryWebApiModule.forRoot(DocumentDataInMemService),
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
