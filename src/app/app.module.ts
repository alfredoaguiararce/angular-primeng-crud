import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DocumentDataInMemService } from './services/document-data-in-mem.service';
import { HttpClientModule } from '@angular/common/http';
import { DocumentTableComponent } from './components/document-table/document-table.component';

// Primeng modules
import {ButtonModule} from 'primeng/button';
import { TableModule } from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DatePipe } from '@angular/common';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentTableComponent,
    CreateFormComponent,
    EditFormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Use this to fake oir API
    InMemoryWebApiModule.forRoot(DocumentDataInMemService),
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CardModule,
    CascadeSelectModule,
    RippleModule,
    InputSwitchModule,
    ToggleButtonModule   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
