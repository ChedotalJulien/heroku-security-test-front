import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from '../services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegisterComponent
  ],


imports: [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule
],

providers: [AuthenticationService],
bootstrap: [AppComponent]
})

export class AppModule { }
