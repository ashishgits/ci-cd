import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-greet',
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.scss',
})
export class GreetComponent implements OnInit {
  private http = inject(HttpClient);
  display: any;

  ngOnInit() {
    this.http.get<any>('http://localhost:3500').subscribe((data) => {
      this.display = data.message;
    });
  }
}
