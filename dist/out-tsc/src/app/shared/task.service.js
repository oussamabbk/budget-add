var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
// headers
var httpOptions = {
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};
var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
    }
    // adding tasks to database
    TasksService.prototype.addTask = function (description, starttime, endtime, timespent) {
        var contentBody = JSON.stringify({
            "description": description,
            "starttime": starttime,
            "endtime": endtime,
            "timespent": timespent
        });
        return this.http.post('http://localhost:3000/api/tasks', contentBody, httpOptions)
            .pipe(map(function (res) { return res; }));
    };
    // retrieving tasks from database by date
    TasksService.prototype.getTasks = function () {
        return this.http.get('http://localhost:3000/api/tasks?filter[order]=starttime%20DESC', httpOptions)
            .pipe(map(function (res) { return res; }));
    };
    TasksService.prototype.findTask = function (searchDescription) {
        return this.http.get('http://localhost:3000/api/tasks?filter[where][description]=' + searchDescription, httpOptions)
            .pipe(map(function (res) { return res; }));
    };
    TasksService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], TasksService);
    return TasksService;
}());
export { TasksService };
//# sourceMappingURL=task.service.js.map