import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test/test.directive';
import { NewDirective } from './new/new.directive';
import { BetterHighlightDirective } from './better/better-highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    NewDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
