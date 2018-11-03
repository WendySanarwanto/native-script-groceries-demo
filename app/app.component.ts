import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

import { User, UserService } from "./shared/user";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class AppComponent implements OnInit {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = {
      email:'alex@nuvious.com',
      password: ''
    };
  }

  ngOnInit(): void {
    firebase.init({
      persist: true      
    }).then(instance => {
      console.log("[DEBUG] - <AppComponent.ngOnInit> firebase.init done !");
    }, error => {
      console.log(`[ERROR] - <AppComponent.ngOnInit> firebase.init error: \n`);
      console.dir(error);
    });
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    // TOOD: Implement this
    const { email, password } = this.user;
    console.log(`[DEBUG] - <AppComponent.login> Logging in using this following credentials, email: ${email}, password: ${password}`);
  }

  signUp() {
    this.userService.register(this.user)
      .then(response => {
        console.log(`[DEBUG] - <AppComponent.signUp> Signing up '${this.user.email}' is success. Respone: \n`);
        console.dir(response);
        this.user.password = '';
        this.toggleDisplay();
      })
      .catch(error => {
        console.log(`[ERROR] - <AppComponent.signUp> Signing up '${this.user.email}' is Failing. Details: \n`);
        console.dir(error);
      });
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}