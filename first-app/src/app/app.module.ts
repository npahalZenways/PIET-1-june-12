import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom/custom';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { ParentComponent } from './data-sharing/parent/parent.component';
import { ChildComponent } from './data-sharing/child/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirective } from "./directives/my-directive";
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from "./pipes/my-custom-pipe";
import { FormsComponent } from './forms/forms.component';
import { ServiceCosumer } from './service/service-consumer';
import { MyService } from './service/my-service';

@NgModule({
  declarations: [
    AppComponent,
    Custom,
    DataBindingComponent,
    InBuiltDirectivesComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    MyDirective,
    PipesComponent,
    CustomPipe,
    FormsComponent,
    ServiceCosumer
    // remaining - components, directives, pipes etc.
  ],
  imports: [
    BrowserModule,
    FormsModule
    // modules
  ],
  providers: [
    // service
    // MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// decorator - class, property, method, parameter decorators

// class abc{
//   @Custom myName;
// }