import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material Start
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//Material End

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
