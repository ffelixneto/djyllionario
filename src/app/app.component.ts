import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login() {}

  textValue = '';

  onInit(){
    this.textValue = ('' + this.textValue);
  }

}
