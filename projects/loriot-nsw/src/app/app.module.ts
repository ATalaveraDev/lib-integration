import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoriotUiModule } from 'loriot-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoriotUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
