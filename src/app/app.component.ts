import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Dating app";
  users:any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://localhost:44363/api/Users").subscribe({
      next: response => this.users = response,
      error: (error) => console.log(error),
      complete: () => console.log("request has completed")
    });
  }

}
