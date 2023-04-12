import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-order-web';

  getLogin(): boolean {
    return sessionStorage.getItem('login') ? false : true;
  }
}
