import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { EligibilitycalcComponent } from './eligibilitycalc/eligibilitycalc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopnavigationComponent,
    EligibilitycalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
