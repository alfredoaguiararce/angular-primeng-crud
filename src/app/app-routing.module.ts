import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'documents',
    pathMatch:'full',
  },
  {
    path:'documents',
    children:[
      {
        path:'',
        component: DocumentTableComponent
      },
      {
        path:'edit/:id',
        component: EditFormComponent,
      },
      {
        path:'add',
        component: CreateFormComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
