import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FileManagerComponent } from './filemanager/filemanager.component';
import { KanbanComponent } from './kanban/kanban.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PageNotFoundComponent,
    FileManagerComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'start', component: StartComponent},
      {path: 'filemanager', component: FileManagerComponent},
      {path: 'kanban', component: KanbanComponent},
      {path: '', redirectTo: '/start', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
