import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// @ts-ignore 
import '../../webix/kanban/codebase/kanban.js';
import { TasksService } from '../kanbanData/tasks.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'kanban',
    template:"<span></span>",
    styleUrls: [
      './../../webix/kanban/codebase/kanban.css',
    ],
    providers: [TasksService]
})
export class KanbanComponent implements OnDestroy, OnInit {
    private ui: webix.ui.kanban;
    @Output() onCardStatusChange = new EventEmitter<any>();

    constructor(root: ElementRef, private tasks: TasksService) {
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