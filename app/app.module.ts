import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
// import { LoginComponent } from "./pages"; 

@NgModule({
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [AppComponent],
    // , LoginComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
