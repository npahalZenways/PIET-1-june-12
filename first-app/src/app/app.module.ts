import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom/custom';

@NgModule({
  declarations: [
    AppComponent,
    Custom
    // remaining - components, directives, pipes etc.
  ],
  imports: [
    BrowserModule
    // modules
  ],
  providers: [
    // service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// decorator - class, property, method, parameter decorators

// class abc{
//   @Custom myName;
// }