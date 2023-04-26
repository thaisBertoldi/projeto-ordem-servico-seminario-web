import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-logout',
  templateUrl: './redirect-logout.component.html',
  styleUrls: ['./redirect-logout.component.css']
})
export class RedirectLogoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }, 3000);
  }

}
