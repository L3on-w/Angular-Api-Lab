import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  public routes = [
    {
      route: "",
      text: "Home"
    },
    {
      route: "add-movie",
      text: "Add"
    },
  ]

  ngOnInit(): void {
  }

}
