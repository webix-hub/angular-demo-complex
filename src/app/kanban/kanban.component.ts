import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation, output, inject } from '@angular/core';
// @ts-ignore
import '../../webix/kanban/codebase/kanban.js';
import { TasksService } from '../kanbanData/tasks.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'kanban',
    template: "<span></span>",
    styleUrls: [
        './../../webix/kanban/codebase/kanban.css',
    ],
    providers: [TasksService]
})
export class KanbanComponent implements OnDestroy, OnInit {
    private tasks = inject(TasksService);
    private ui: webix.ui.kanban;
    readonly onCardStatusChange = output<any>();

    constructor() {
        const root = inject(ElementRef);
        this.ui = <webix.ui.kanban> webix.ui({
            container: root.nativeElement,
            view: "kanban",
            height: 700,
            width: 1000,
            editor: true,
            cols:[
                { header:"Backlog",
                    body:{ view:"kanbanlist", status:"new" }},
                { header:"In Progress",
                    body:{ view:"kanbanlist", status:"work" }},
                { header:"Testing",
                    body:{ view:"kanbanlist", status:"test" }},
                { header:"Done",
                    body:{ view:"kanbanlist", status:"done" }}
            ],
            data: this.tasks.getTasks(),
            on: {
                onAfterStatusChange: (id: any, status: any, list: any) => this.onCardStatusChange.emit([id, status, list])
            }
        })
    }

    ngOnInit(){
        this.ui.resize();
    }
    ngOnDestroy(){
        this.ui.destructor();
    }
}