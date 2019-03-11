import { Component } from '@angular/core'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule // <--- right here
  ],
  bootstrap: [AppComponent],
  providers: []
})
class HttpAppModule {}
