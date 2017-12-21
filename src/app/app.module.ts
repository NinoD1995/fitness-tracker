import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FitnessComponent } from './fitness/fitness.component';
import { LoginComponent } from './login/login.component';
import { TrackerService } from './models/tracker.service';
import { Person } from "./models/person";
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    FitnessComponent,
    LoginComponent,
    ProfileComponent,
    FeedComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent},
      { path: "login", component: LoginComponent},
      { path: "fitness", component: FitnessComponent},
      { path: "profile", component: ProfileComponent},
      { path: "feed", component: FeedComponent},
      { path: "", pathMatch: "full", redirectTo: "home" }
    ])
  ],
  providers: [LoginComponent, TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
