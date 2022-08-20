import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillLevelComponent } from './skill-level/skill-level.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SkillLevelComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagemoduleModule { }
