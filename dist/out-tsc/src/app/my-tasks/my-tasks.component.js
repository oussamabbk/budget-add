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
import { TasksService } from '../shared/task.service';
var MyTasksComponent = /** @class */ (function () {
    // Injection of our TaskService
    function MyTasksComponent(taskService) {
        this.taskService = taskService;
        //task description variable
        this.description = '';
        //task starting time variable
        this.startingtimeinput = '';
        //task ending time variable
        this.endingtimeinput = '';
        //task duration variable
        this.timespentinput = '';
        // array of Tasks used while displaying tasks
        this.myTask = [];
        // pagination starting page
        this.page = 1;
        this.displayTasks();
    }
    MyTasksComponent.prototype.ngOnInit = function () {
    };
    MyTasksComponent.prototype.displayTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (data) {
            _this.tasks = JSON.parse(data.text());
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
                if (second == null) {
                    second = "00";
                }
                if (second.length == 1) {
                    second = "0" + second;
                }
                timing = hour + ":" + minute + ":" + second;
                _this.myTask.push(_this.tasks[x].description + "$#" +
                    _this.tasks[x].starttime + "$#" +
                    _this.tasks[x].endtime + "$#" +
                    timing);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MyTasksComponent.prototype.addTaskManually = function () {
        if (this.description.length == 0) {
            this.description = 'NO DESCRIPTION';
        }
        // Starting Date & Time
        var start = this.startingtimeinput;
        var startDate = start.split('T')[0];
        var startTime = start.split('T')[1];
        var startHour = startTime.split(':')[0];
        var startMinute = startTime.split(':')[1];
        var startSeconde = startTime.split(':')[2];
        if (startSeconde == null) {
            startSeconde = "00";
        }
        startTime = startHour + ":" + startMinute + ":" + startSeconde;
        start = "Date: " + startDate + ", Time: " + startTime;
        // Ending Date & Time
        var end = this.endingtimeinput;
        var endDate = end.split('T')[0];
        var endTime = end.split('T')[1];
        var endHour = endTime.split(':')[0];
        var endMinute = endTime.split(':')[1];
        var endSeconde = endTime.split(':')[2];
        if (endSeconde == null) {
            endSeconde = "00";
        }
        endTime = endHour + ":" + endMinute + ":" + endSeconde;
        end = "Date: " + endDate + ", Time: " + endTime;
        var task = {
            description: this.description,
            starttime: start,
            endtime: end,
            timespent: this.timespentinput
        };
        this.taskService.addTask(task.description, task.starttime, task.endtime, task.timespent).subscribe(function (res) {
            console.log(res);
            window.alert("Task successfully added!");
            location.reload();
        }, function (error) {
            console.log(error);
            alert("Can\'t save task");
        });
    };
    MyTasksComponent = __decorate([
        Component({
            selector: 'my-tasks',
            templateUrl: './my-tasks.component.html',
            styleUrls: ['./my-tasks.component.css'],
        }),
        __metadata("design:paramtypes", [TasksService])
    ], MyTasksComponent);
    return MyTasksComponent;
}());
export { MyTasksComponent };
//# sourceMappingURL=my-tasks.component.js.map