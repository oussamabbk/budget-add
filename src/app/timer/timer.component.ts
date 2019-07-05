/*import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { TasksService } from '../shared/task.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  // total counted seconds
  private time = 0;

  //time variables
  private seconds = 0;
  private minutes = 0;
  private hours = 0;

  // subscription for timer
  private subscription: Subscription;

  //seconds counter
  private timer : Observable<number>;

  //button status
  private activePlayBtn = false;
  private activePauseBtn = false;
  private activeStopBtn = false;
  
  //task description variable
  description = '';

  //task starting time variable
  startedAt = '';

  //task ending time variable
  endedAt = '';

  //task duration variable
  timeSpent = '';

  constructor(private taskService : TasksService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if (this.activeStopBtn===true){
      alert("You'll loose the current tracking!");
    }
  }

  // start timer method
  playTime(){
    var fullDate= new Date().toISOString().substr(0, 19);
    var startDate = fullDate.split('T')[0];
    var startTime = fullDate.split('T')[1];
    this.startedAt = "Date: "+startDate+", Time: "+startTime;
    this.timer = TimerObservable.create(0, 1000);
    this.subscription = this.timer.subscribe(t => {
      if (t<60){
        this.seconds = t;
      }
      else {
        this.minutes=~~(t/60);
        this.seconds = t%60;
        if (this.minutes>60){
          this.hours=~~(this.minutes/60);
          this.minutes=this.minutes%60;
        }
      }
    });
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = true;
    this.activePlayBtn = false;
    this.activePauseBtn = true;
    this.activeStopBtn = true;
  }

  // pause timer method
  pauseTime(){
    this.subscription.unsubscribe();
    this.time = this.hours*3600+this.minutes*60+this.seconds;
    this.activePlayBtn=true;
    this.activePauseBtn = false; 
    this.activeStopBtn = true;
    var elements = <HTMLInputElement> document.getElementById("btnplay");
    elements.disabled = false;
  }

  // resume timer method
  onResumeTime(){
    this.activePauseBtn=true;
    this.activeStopBtn = true;
    this.activePlayBtn=true;
    this.timer = TimerObservable.create(0, 1000);
    this.subscription = this.timer.subscribe(t => {
      t+=this.time;
      if (t<60){
        this.seconds = t;
      }
      else {
        this.minutes=~~(t/60);
        this.seconds = t%60;
        if (this.minutes>60){
          this.hours=~~(this.minutes/60);
          this.minutes=this.minutes%60;
        }
      }
    });
    var elements = <HTMLInputElement> document.getElementById("btnplay");
    elements.disabled = true;
  }

  // stop timer method
  stopTime(){
    this.activePlayBtn=false;
    this.activeStopBtn = false;
    this.activePauseBtn = false;

    var fullDate = new Date().toISOString().substr(0, 19);
    var endDate = fullDate.split('T')[0];
    var endTime = fullDate.split('T')[1];
    this.endedAt = "Date: "+endDate+", Time: "+endTime;
    this.timeSpent = this.hours+":"+this.minutes+":"+this.seconds;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.subscription.unsubscribe();
    if(this.description.length==0){
      this.description = 'NO DESCRIPTION';
    } 
    const task: Task = {
      description : this.description,
      starttime : this.startedAt,
      endtime : this.endedAt,
      timespent : this.timeSpent
    };
    this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
      } ,
      (error) => {
        console.log(error);
        alert("Can\'t save task");
      }
    );
    var element = <HTMLInputElement> document.getElementById("btnplay");
    element.disabled = false;
  }
}
*/
import { Component, OnInit,Input } from "@angular/core";
import * as Chartist from "chartist";
import * as moment from "moment";
import "moment/locale/fr";
import { style } from "@angular/animations";
import{utilisateurservice}from'../shared/utilisateur.service';
import { Message } from "@angular/compiler/src/i18n/i18n_ast";


@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  appParentMessage: string;
  
  
  user = JSON.parse(localStorage.getItem("body user"));
  //user = localStorage.getItem("body user");
  

  
  
      //localStorage.setItem("body user", JSON.stringify(this.user));
      //localStorage.setItem(this.user,'body user');

  currentDate;
  currentTime;
  Jour;
  constructor() {}
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on("draw", function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on("draw", function(data) {
      if (data.type === "bar") {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq2 = 0;
  }
  ngOnInit() {
    this.currentDate = moment()
      .locale("fr")
      .format("DD/MM/YYYY");
    this.currentTime = moment()
      .locale("fr")
      .format("LT");
    this.Jour = moment()
      .locale("fr")
      .format("dddd");

    var data = {
      series: [5, 3]
    };

    var sum = function(a, b) {
      return a + b;
    };

    new Chartist.Pie(".ct-chart", data, {
      labelInterpolationFnc: function(value) {
        return Math.round((value / data.series.reduce(sum)) * 100) + "%";
      }
    });
    
  
  
    /* .......................................*/

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    /*
      var dataDailySalesChart: any = {
          labels: ['dép/rev'],
          series: [
              [17],
              [30]
          ]
      };

     var optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Bar('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(dailySalesChart);

      */
    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
      
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    var completedTasksChart = new Chartist.Line(
      "#completedTasksChart",
      dataCompletedTasksChart,
      optionsCompletedTasksChart
    );

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);

    /* ----------==========     MOIS Subscription Chart initialization    ==========---------- */

    var datawebsiteViewsChart = {
      labels: [" S1", "S2", "S3", "S4"],
      series: [[542, 443, 320, 780], [500, 400, 250, 700]]
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    var responsiveOptions: any[] = [
      [
        "screen and (max-width: 500px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          },
          axisY: {
            style: "stroke-width: 300px",
            labelInterpolationFnc: function(value) {
              return value;
            }
          }
        }
      ]
    ];
    var datasiteViewsChart = new Chartist.Bar(
      "#websiteViewsChart",
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    //start animation for the MOIS Subscription Chart
    this.startAnimationForBarChart(datasiteViewsChart);

  }
  getInformation(){
    //let user = localStorage.getItem("body user");

    //console.log(user[0].email);

  }
  
  
}

