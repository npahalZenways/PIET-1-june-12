import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";

@NgModule({
    imports:[
        RouterModule.forChild([{
            path:'',
            redirectTo:'adminhome',
            pathMatch:'full'
        },{
            path:'adminhome',
            component: AdminHomeComponent
        }])
    ],
    declarations: [
        AdminHomeComponent
    ],
    providers: []
})
export class AdminModule{

}