import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FellowshipBoxComponent } from './fellowship-box/fellowship-box.component';


@NgModule({
  declarations: [
    AppComponent,
    FellowshipBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
