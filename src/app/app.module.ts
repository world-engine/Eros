import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaeaModule } from 'gaea';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaeaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
