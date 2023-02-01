Webix-Angular demo with Complex Widgets
================

This repo contains examples of importing Webix [Complex Widgets](https://webix.com/widget/complex-widgets/) into an Angular App.<br/>By default, the demo shows how to initialize the [**File Manager**](https://webix.com/filemanager/) and [**Kanban**](https://webix.com/kanban/), but they can be replaced with any of Webix Complex Widgets. 

The example is based on the [default demo from Webix Github](https://github.com/webix-hub/angular2-demo) (see its [README](https://github.com/webix-hub/angular2-demo#basics-of-usage) for details of integration) and basic Angular tutorial for [routes in a SPA](https://angular.io/guide/router-tutorial#using-angular-routes-in-a-single-page-application). <br/>


Complex widgets are PRO components.<br/>This demo uses the Trial version of Webix placed into the "src". <br/>If you have a license for Webix PRO, the sources ("codebase") can be placed instead of the Trial version, or fetched from npm (in that case, make sure you have signed in to Webix [private @xbs scope](https://docs.webix.com/desktop__install.html#installingwithnpm)). <br/>
**Note**: NPM always provides access to the latest versions of packages, so credentials are valid only while the license is active. <br/>
To download the latest **Trial** package, check [webix.com/download](https://webix.com/download/).

How to Start
----------------

After cloning the repo, run the following commands:

```
npm install
npm start
```
Then open `//localhost:4200/` (default port).

How to import and use a Complex Widget
-------

*Before* importing sources of any complex widget, make sure the Webix is available globally.<br/>This demo uses `scripts` in the workspace configuration ([documentation](https://angular.io/guide/workspace-config#style-script-config)). 

File Manager and all Complex Widgets released since version 7.2 are SPA wrapped into Webix views (here's an [article](https://blog.webix.com/new-strategy-of-complex-widgets-why-webix-jet/) about their featueres).<br/>To be able to use all their features (including customization of modules), these components should be imported with the following statement:
```
import * as fileManager from "@xbs/filemanager";
```
Kanban and Spreadsheet implemented as plain Webix views, so importing these widgets can be done simply as 
```
import "@xbs/kanban";
```
