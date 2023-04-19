import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showNavAdmin: Boolean;

  constructor() { }

  ngOnInit(): void {
    const type = sessionStorage.getItem('type');
    if(type === 'admin') {
      this.showNavAdmin = true;
    } else {
      this.showNavAdmin = false;
    }
  }
  
}
