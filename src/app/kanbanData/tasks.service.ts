import { Injectable } from "@angular/core";
import { Task } from "./tasks";

const TASKS: Task[] = [
	{ "id":1,   "status":"new",     "text":"Task 1",    "tags":"webix,docs",    "personId":1 },
	{ "id":2,   "status":"work",    "text":"Task 2",    "tags":"webix",         "personId": 4  },
	{ "id":3,   "status":"work",    "text":"Task 3",    "tags":"webix,docs",   "personId": 6 },
	{ "id":4,   "status":"test",    "text":"Task 4 (pending)",  "tags":"webix 9.1", "personId": 5  },
	{ "id":5,   "status":"new",     "text":"Task 5",    "tags":"webix,docs",    "personId":2 },
	{ "id":6,   "status":"new",     "text":"Task 6",    "tags":"webix,kanban",  "personId": 2 },
	{ "id":7,   "status":"work",    "text":"Task 7",    "tags":"webix",         "personId": 7  },
	{ "id":8,   "status":"work",    "text":"Task 8",    "tags":"webix",         "personId": 4  },
	{ "id":9,   "status":"work",    "text":"Task 9",    "tags":"webix",         "personId": 2},
	{ "id":10,  "status":"work",    "text":"Task 10",   "tags":"webix",         "personId":1 },
	{ "id":11,  "status":"work",    "text":"Task 11",   "tags":"webix 9.1",     "personId": 8 },
	{ "id":12,  "status":"done",    "text":"Task 12" ,  "personId": 8 },
	{ "id":13,  "status":"ready",   "text":"Task 14",   "personId": 8}
];

@Injectable()
export class TasksService {
    getTasks(): Promise<Task[]>{
        return Promise.resolve(TASKS);
    }
}