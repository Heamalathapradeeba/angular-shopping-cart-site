import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  headerList = ["Home", "New Arrivals", "Look Books", "Blog", "Style Guide"]
  constructor() { }

  ngOnInit(): void {
  }

}
