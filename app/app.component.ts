import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "app.html",
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class AppComponent {
  email = 'alex@nuvious.com';
  isLoggingIn = true;

  submit(e) {
    console.log(`[DEBUG] - <AppComponent.submit> email: ${this.email}`);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}