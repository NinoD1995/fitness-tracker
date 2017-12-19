import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FitnessComponent } from './fitness/fitness.component';
import { LoginComponent } from './login/login.component';
import { TrackerService } from './models/tracker.service';
import { Person } from "./models/person";
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    FitnessComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent},
      { path: "login", component: LoginComponent},
      { path: "fitness", component: FitnessComponent},
      { path: "profile", component: ProfileComponent},
      { path: "", pathMatch: "full", redirectTo: "home" }
    ])
  ],
  providers: [LoginComponent, TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
