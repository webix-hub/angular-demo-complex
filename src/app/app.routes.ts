import { Routes } from '@angular/router';
import { FileManagerComponent } from './filemanager/filemanager.component';
import { KanbanComponent } from './kanban/kanban.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'filemanager', component: FileManagerComponent },
    { path: 'kanban', component: KanbanComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];