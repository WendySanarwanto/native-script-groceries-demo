import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
 
import { AppComponent } from "./app.component";
import { UserService } from "./shared/user";
// import { LoginComponent } from "./pages"; 
@NgModule({
  imports: [
    NativeScriptModule, 
    NativeScriptFormsModule, 
    NativeScriptHttpClientModule
  ],
  declarations: [AppComponent],
    // , LoginComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UserService
  ]
})
export class AppModule {}