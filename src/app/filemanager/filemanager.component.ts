import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation, output, inject } from '@angular/core';
// @ts-ignore
import * as fileManager from '../../webix/filemanager/codebase/filemanager.js';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'filemanager',
    template: '<div class="fm-container"></div>',
    styleUrls: [
        './filemanager.component.css',
        './../../webix/filemanager/codebase/filemanager.css',
    ]
})
export class FileManagerComponent implements OnDestroy, OnInit {
    private root = inject(ElementRef);
    private app: any;
    readonly onStateChange = output<any>();

    constructor() {
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