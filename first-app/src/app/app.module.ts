import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { RouterModule, Route } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RouteGuard } from './route-guard';
import { MyTrackService } from './my-track-service';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

const route: Route[] = [{
  path: '',
  redirectTo: 'pipes',
  pathMatch: 'full'
},{
  path: 'pipes',
  component: PipesComponent,
  children: [{
    path: '',
    redirectTo: 'in-built-directives',
    pathMatch: 'full'
  },{
    path: 'in-built-directives',
    component: InBuiltDirectivesComponent
  }]
},{
  path: 'forms/:name',
  component: FormsComponent,
  data: {
    name: 'new',
    id:'ABC@134'
  }
},
{
  path: 'admin',
  canActivate: [RouteGuard],
  loadChildren: './admin/admin#AdminModule'
},
{
  path: 'http',
  component: HttpComponent
},
{
  path: '**',
  component: ErrorComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InBuiltDirectivesComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    MyDirective,
    PipesComponent,
    CustomPipe,
    FormsComponent,
    ServiceCosumer,
    ErrorComponent,
    HttpComponent    // remaining - components, directives, pipes etc.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
    // modules
  ],
  providers: [
    // service
    // MyService
    RouteGuard,
    MyTrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// decorator - class, property, method, parameter decorators

// class abc{
//   @Custom myName;
// }