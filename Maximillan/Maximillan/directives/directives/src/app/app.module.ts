import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test/test.directive';
import { NewDirective } from './new/new.directive';
import { BetterHighlightDirective } from './better/better-highlight.directive';
import { HostlisttestingComponent } from './hostlisttesting/hostlisttesting.component';
import { DropdownDirective } from './drop/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    NewDirective,
    BetterHighlightDirective,
    HostlisttestingComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
