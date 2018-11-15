import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Audisp';
  selectedTab: number;

  constructor() {
    this.selectedTab = 0;
   }
  ngOnInit() {

  }

  changeTab(event){
    this.selectedTab = event.index;
  }
}
