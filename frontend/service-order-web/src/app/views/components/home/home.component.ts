import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  max = 100;
  min = 0;
  step = 1;
  value = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
