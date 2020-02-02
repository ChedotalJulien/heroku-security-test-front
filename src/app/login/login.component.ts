import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";
import { HttpClientModule } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
    export class LoginComponent implements OnInit {
      private mode=0;

      constructor(private authService: AuthenticationService,
                  private router:Router) {}

        ngOnInit() {
        }

        onLogin(user){
            this.authService.login(user).subscribe(resp=>{
              let jwt = resp.headers.get("Authorization");
              this.authService.saveToken(jwt);
              this.router.navigateByUrl("/login");
              },
            err=>{
              this.mode=1;
            })
        }

        onRegister() {
          this.router.navigateByUrl("/register");
        }
    }
