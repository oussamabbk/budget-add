import { Component, OnInit } from "@angular/core";
import { Task } from "../model/task.model";
import { TasksService } from "../shared/task.service";
import { Response } from "@angular/http";
import { utilisateurservice } from "../shared/utilisateur.service";
import { DepEtRevs } from "../model/utilisateur.model";
import { json } from "body-parser";
import { Router } from "@angular/router";

@Component({
  selector: "my-tasks",
  templateUrl: "./my-tasks.component.html",
  styleUrls: ["./my-tasks.component.css"]
})
export class MyTasksComponent implements OnInit {
  constructor(
    private taskService: TasksService,
    private utilisateurservice: utilisateurservice,
    private router: Router
  ) {
    this.displayDepEtRev();
  }
  ID: number;
  date = "";
  categorie = "";
  description = "";
  type = "";
  montant = "";
  DepEtRevs: [
    {
      id: string;
      date: Date;
      categorie: string;
      description: String;
      type: string;
      montant: number;
    }
  ];
  da: Date;
  ca: String;
  de: String;
  mo: number;
  id: String;

  dep: string[] = [];
  page: number = 1;
  depjson = "";
  ngOnInit() {
    /*this.afficherDepEtRev();*/
  }
  afficherDepEtRev() {
    let userId = localStorage.getItem("user_id");
    this.utilisateurservice.findDepEtRev(userId).subscribe((data: any) => {
      console.log(data);
    });
  }
  displayDepEtRev() {
    let userId = localStorage.getItem("user_id");
    this.utilisateurservice.findDepEtRev(userId).subscribe((data: Response) => {
      this.DepEtRevs = JSON.parse(data.text());
      for (var x = 0; x < this.DepEtRevs.length; x++) {
        this.dep.push(
          this.DepEtRevs[x].date +
            "$#" +
            this.DepEtRevs[x].categorie +
            "$#" +
            this.DepEtRevs[x].description +
            "$#" +
            this.DepEtRevs[x].type +
            "$#" +
            this.DepEtRevs[x].montant
        );
        this.ID = x;
        var z = JSON.stringify(this.dep);
        this.depjson = z.substring(2, z.indexOf(",") - 1);
        this.date = this.depjson.split("$#")[0].substring(2, 12);
        this.categorie = this.depjson.split("$#")[1];
        this.description = this.depjson.split("$#")[2];
        this.type = this.depjson.split("$#")[3];
        this.montant = this.depjson.split("$#")[4];
      }
    });
  }
  getID(ID) {
    console.log(ID);
    console.log();
  }
  supprimerDep(ID) {
    let userId = localStorage.getItem("user_id");
    this.utilisateurservice.findDepEtRev(userId).subscribe((data: Response) => {
      this.DepEtRevs = JSON.parse(data.text());
      for (var x = 0; x < this.DepEtRevs.length; x++) {
        if (x == ID) {
          this.da = this.DepEtRevs[x].date;
          this.ca = this.DepEtRevs[x].categorie;
          this.de = this.DepEtRevs[x].description;
          this.mo = this.DepEtRevs[x].montant;
          this.id = this.DepEtRevs[x].id;
          console.log(this.da, this.ca, this.de, this.mo, this.id);
          this.utilisateurservice
            .DeletDepEtRev(this.id)
            .subscribe((data: any) => {
              console.log("delete ");
              location.reload();
            });
        }
      }
    });
  }
  versmodifierDep(ID) {
    let userId = localStorage.getItem("user_id");
    this.utilisateurservice.findDepEtRev(userId).subscribe((data: Response) => {
      this.DepEtRevs = JSON.parse(data.text());
      for (var x = 0; x < this.DepEtRevs.length; x++) {
        if (x == ID) {
          this.id = this.DepEtRevs[x].id;
          console.log(this.id);
          localStorage.setItem("key", this.DepEtRevs[x].id);
          this.router.navigate(["/Updatedep"]);
        }
      }
    });
  }
}

/*displayTasks(){
    this.taskService.getTasks().subscribe(
      (data : Response) => {
        this.tasks = JSON.parse(data.text());
       for (var x=0;x<this.tasks.length;x++){
         var timing = this.tasks[x].timespent;
         var hour = timing.split(':')[0];
         var minute = timing.split(':')[1];
         var second = timing.split(':')[2];
         if (hour.length==1){
          hour = "0"+hour;
         }
         if (minute.length==1){
          minute = "0"+minute;
        }
        if (second==null){
          second = "00";
        }
        if (second.length==1){
          second = "0"+second;
        }
        timing = hour+":"+minute+":"+second;
        this.myTask.push(this.tasks[x].description+"$#"+
        this.tasks[x].starttime+"$#"+
        this.tasks[x].endtime+"$#"+
        timing);
      }
     },
      (error)=>{console.log(error)
      }
    );
  }

  addTaskManually(){
    if(this.description.length==0){
      this.description = 'NO DESCRIPTION';
    } 
    // Starting Date & Time
    var start = this.startingtimeinput;
    var startDate = start.split('T')[0];
    var startTime = start.split('T')[1];
    var startHour = startTime.split(':')[0];
    var startMinute = startTime.split(':')[1];
    var startSeconde = startTime.split(':')[2];
    if (startSeconde==null){
      startSeconde="00";
    }
    startTime = startHour+":"+startMinute+":"+startSeconde;
    start = "Date: "+startDate+", Time: "+startTime;
    
    // Ending Date & Time
    var end = this.endingtimeinput;
    var endDate = end.split('T')[0];
    var endTime = end.split('T')[1];
    var endHour = endTime.split(':')[0];
    var endMinute = endTime.split(':')[1];
    var endSeconde = endTime.split(':')[2];
    if (endSeconde==null){
      endSeconde="00";
    }
    endTime = endHour+":"+endMinute+":"+endSeconde;
    end = "Date: "+endDate+", Time: "+endTime;
    const task: Task = {
      description : this.description,
      starttime : start,
      endtime : end,
      timespent : this.timespentinput
    };
    this.taskService.addTask(task.description,task.starttime,task.endtime,task.timespent).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Task successfully added!");
          location.reload();
      },
      (error) => {
        console.log(error);
        alert("Can\'t save task");
      }
    );
  }*/
/*//task description variable
  description = "";

  //task starting time variable
  startingtimeinput = "";

  //task ending time variable
  endingtimeinput = "";

  //task duration variable
  timespentinput = "";

  // array populated with the json response
  tasks: [
    {
      description: string;
      starttime: string;
      endtime: string;
      timespent: string;
    }
  ];

  // array of Tasks used while displaying tasks
  myTask: string[] = [];

  // pagination starting page
  page: number = 1;

  // Injection of our TaskService
  constructor(private taskService: TasksService) {
    this.displayTasks();
  }*/
