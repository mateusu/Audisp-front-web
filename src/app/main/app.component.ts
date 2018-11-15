import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Audisp';
  selectedTab: number;

  showLogin: any;
  userLogged: boolean;

  constructor() {
    this.selectedTab = 0;

    const status = localStorage.getItem('logged');

    if (status !== 'none') {
      this.userLogged = true;
    } else {
      this.userLogged = false;
    }
  }

  changeTab(event) {
    this.selectedTab = event.index;
  }

  closeModal(event) {
    this.showLogin = event;
  }

  logout() {
    localStorage.setItem('logged', 'none');
    localStorage.setItem('user', 'none');
    location.reload();
  }
}
