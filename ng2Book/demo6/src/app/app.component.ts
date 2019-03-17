import { Component } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HttpApp {
  title = 'app'
  constructor(public http: Http) {}
  makeRequest(): void {

  }
}
