import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpApp } from './app.component'
import { Component } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HttpModule } from '@angular/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component'

@NgModule({
  declarations: [
    HttpApp,
    SimpleHttpComponent,
    // SimpleHTTPComponent,
    // MoreHTTPRequests,
    // YouTubeSearchComponent,
    // SearchBox,
    // SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule // <--- right here
  ],
  bootstrap: [HttpApp],
  providers: [
    // youTubeServiceInjectables
    // http://jsonplaceholder.typicode.com
  ]
})
export class HttpAppModule {}
