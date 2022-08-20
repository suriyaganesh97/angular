import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pagemodule/navbar/navbar.component';
import { SkillLevelComponent } from './pagemodule/skill-level/skill-level.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md'
import { Routes,RouterModule } from '@angular/router';
import { HomepageComponent } from './pagemodule/homepage/homepage.component';

const appRoutes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'skill', component: SkillLevelComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillLevelComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
