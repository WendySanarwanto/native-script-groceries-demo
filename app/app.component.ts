import { Component } from "@angular/core";
import { User } from "./shared/user";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = {
      email:'alex@nuvious.com',
      password: ''
    };
  }

  submit(e) {
    console.dir(this.user);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}