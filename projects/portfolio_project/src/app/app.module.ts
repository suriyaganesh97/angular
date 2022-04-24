import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pagemodule/navbar/navbar.component';
import { SkillLevelComponent } from './pagemodule/skill-level/skill-level.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillLevelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
