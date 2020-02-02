import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
  export class TasksComponent implements OnInit {
    public tasks:any;
      constructor(private authService:AuthenticationService,
      private router:Router) { }

        ngOnInit() {
        this.authService.getTasks()
        .subscribe(data=>{
        this.tasks=data;
        },err=>{
        this.authService.logout();
        this.router.navigateByUrl("/login");
        })
      }
      onNewTask(){
      this.router.navigateByUrl('/new-task');
      }
  }
