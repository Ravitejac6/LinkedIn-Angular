import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;

  showArtists(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor(private http: HttpClient) {
    this.query = "";
    this.artists = [];
  }

  ngOnInit() {
    this.http.get<Object>("../assets/data.json").subscribe((data) => {
      this.artists = data;
    });
  }
}
