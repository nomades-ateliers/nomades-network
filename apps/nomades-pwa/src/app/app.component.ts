import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nomades-network/api-interfaces';

@Component({
  selector: 'nomades-network-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
