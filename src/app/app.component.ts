import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputNames = ' ';
  setInputNames: string[] = [];

  onInput = (addMember: string) => {
    this.inputNames = addMember
    console.log(this.inputNames);
  }

  onAdd() {
    this.setInputNames.push(this.inputNames)
    this.inputNames = ''
    console.log(this.setInputNames);
  }

}
