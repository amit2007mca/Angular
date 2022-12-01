import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string;
  name: string;
  persons: any;
  ngOnInit() {
    this.title = "Welcome";
    this.name = "Amit";
    this.persons = [
      {
        id: 1,
        name: "Hardik Savani",
        gender: "Male",
        website: "itsolutionstuff.com",
        desc: "Your Info: "
      },
      {
        id: 2,
        name: "Kajal Patel",
        gender: "Female",
        website: "nicesnippets.com",
        desc: "Your Info: "
      },
      {
        id: 3,
        name: "Harsukh Makawana",
        gender: "Male",
        website: "laracode.com",
        desc: "Your Info: "
      }
    ];
  }
  constructor() {}
}
