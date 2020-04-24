import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I am a component inside component.ts';
  sahilclickHandler() {
    alert('Sahil clicked mouse');
  }
  sateeshclickhandler() {
    alert("Sateesh Clicked mouse")
  }
}
