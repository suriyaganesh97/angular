import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillLevelComponent } from './skill-level/skill-level.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SkillLevelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagemoduleModule { }
