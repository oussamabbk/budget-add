var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TasksService } from '../../shared/task.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(taskService) {
        this.taskService = taskService;
        // search bar input
        this.searchDescription = '';
        // array of Tasks used while displaying tasks
        this.myTask = [];
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.searchTask = function () {
        var _this = this;
        this.taskService.findTask(this.searchDescription).subscribe(function (data) {
            _this.tasks = JSON.parse(data.text());
            if (_this.tasks.length <= 0) {
                alert("No Task Found With This Description");
            }
            else {
                for (var x = 0; x < _this.tasks.length; x++) {
                    var timing = _this.tasks[x].timespent;
                    var hour = timing.split(':')[0];
                    var minute = timing.split(':')[1];
                    var second = timing.split(':')[2];
                    if (hour.length == 1) {
                        hour = "0" + hour;
                    }
                    if (minute.length == 1) {
                        minute = "0" + minute;
                    }
                    if (second.length == 1) {
                        second = "0" + second;
                    }
                    timing = hour + ":" + minute + ":" + second;
                    alert("Task description: " + _this.tasks[x].description + "\n"
                        + "Starting Time: " + _this.tasks[x].starttime + "\n"
                        + "Ending Time: " + _this.tasks[x].endtime + "\n"
                        + "Time Spent On Task: " + timing);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        __metadata("design:paramtypes", [TasksService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map