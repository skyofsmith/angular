import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object
  loading: boolean
  constructor(private http: Http) {}

  ngOnInit() {}

  makeRequest(): void {
    this.loading = true
    this.http
      .request('http://localhost:4300/student')
      .subscribe((res: Response) => {
        this.data = res.json()
        this.loading = false
      }, err => {
        this.loading = false
      })
  }
}
