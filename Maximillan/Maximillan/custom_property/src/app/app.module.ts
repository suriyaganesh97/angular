import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';
import { TestcompoComponent } from './testcompo/testcompo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewComponent,
    TestcompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
