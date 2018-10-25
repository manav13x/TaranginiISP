import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ServicefromComponent } from './component/servicefrom/servicefrom.component';
import { SuccesspageComponent } from './component/successpage/successpage.component';


const paths : Routes = [
  {path:'',component:DashboardComponent},
  {path:'add/:title',component:ServicefromComponent},
  {path:'view/:cId',component:SuccesspageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServicefromComponent,
    SuccesspageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
