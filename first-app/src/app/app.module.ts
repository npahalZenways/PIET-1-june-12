import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom/custom';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBindingComponent,
    InBuiltDirectivesComponent
    // remaining - components, directives, pipes etc.
  ],
  imports: [
    BrowserModule,
    FormsModule
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