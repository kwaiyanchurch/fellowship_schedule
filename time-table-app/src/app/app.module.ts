import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FellowshipBoxComponent } from './fellowship-box/fellowship-box.component';


@NgModule({
  declarations: [
    AppComponent,
    FellowshipBoxComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
