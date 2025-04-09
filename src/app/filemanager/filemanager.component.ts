import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import * as fileManager from '../../webix/filemanager/codebase/filemanager.js';

@Component({
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  selector: 'filemanager',
  template:'<div class="fm-container"></div>',
  styleUrls: [
      './filemanager.component.css',
      './../../webix/filemanager/codebase/filemanager.css',
    ]
})
export class FileManagerComponent implements OnDestroy, OnInit {
    private app: any;
    @Output() onStateChange = new EventEmitter<any>();

    constructor(private root: ElementRef) {
        this.app = new (fileManager as any).App({
            url: "https://docs.webix.com/filemanager-backend/"
        });

        const state = this.app.getState();
        state.$observe("selectedItem", (selection: any) => {
            this.onStateChange.emit({
                type: "selectedItem",
                value: selection
            });
        });

        state.$observe("path", (path: any) => {
            this.onStateChange.emit({
                type: "path",
                value: path
            });
        })
    }

    getState(){
        // @ts-ignore
        return this.app.getState();
    }
    ngOnInit(){
        const container = this.root.nativeElement.children[0];
        this.app.render(container);
    }
    ngOnDestroy(){
        this.app.destructor();
    }
}