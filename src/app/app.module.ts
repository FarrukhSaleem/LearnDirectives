import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveIFComponent } from './directive-if/directive-if.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveIFComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
