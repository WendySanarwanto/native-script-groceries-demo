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
      console.log("firebase.init done");
    }, error => {
      console.log(`firebase.init error: \n`);
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
  }

  signUp() {
    this.userService.register(this.user);
      // .subscribe(() => {
      //   alert("Your account was successfully created.");
      //   this.toggleDisplay();
      // }, (err) => {
      //   console.dir(err);
      //   alert("Unfortunately we were unable to create your account.");
      // });
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}