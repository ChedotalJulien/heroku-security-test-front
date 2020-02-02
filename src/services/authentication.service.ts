import { Injectable } from "@angular/core";
import * as jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { JwtHelper } from 'angular2-jwt';

  @Injectable()
  export class AuthenticationService{
      public host:string="http://localhost:8080";
      private jwtToken:string;
      private roles:Array<any>=[];
      constructor(private http:HttpClient) { }

      login(user){
        return this.http.post(this.host+"/login",user,{observe:'response'});
      }
      register (user){
        return this.http.post(this.host+"/user",user);
      }
    saveToken(jwt:string){
        this.jwtToken = jwt;
        localStorage.setItem('token',jwt);
        this.roles = jwt_decode(this.jwtToken).roles;

        //let jwtHelper = new JwtHelper();
        //this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

      }
      getTasks(){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(this.host+"/tasks",{headers:new HttpHeaders
        ({'authorization':this.jwtToken})});
      }
      saveTask(task){
        let headers=new HttpHeaders();
        headers.append('authorization',this.jwtToken);
        return this.http.post(this.host+"/tasks",task,{headers:new HttpHeaders
        ({'authorization':this.jwtToken})});
      }
      loadToken(){
          this.jwtToken = localStorage.getItem('token');
        }
      logout(){
        localStorage.removeItem('token');
      }
      isAdmin(){
        for (let r of this.roles) {
          if (r.authority=='ADMIN') return true;
        }
        return false;
      }
  }

