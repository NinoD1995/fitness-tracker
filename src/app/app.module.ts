import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FitnessComponent } from './fitness/fitness.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    FitnessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent},
      { path: "fitness", component: FitnessComponent},
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
