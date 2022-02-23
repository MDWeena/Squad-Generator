import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputNames = '';
  setInputNames: string[] = [];
  errorMessage: string = '';
  numTeamInput: number | '' = '';
  teams: string[][] = [];

  onInput = (addMember: string) => {
    this.inputNames = addMember;
    console.log(this.inputNames);
  };

  onNumTeamInput = (numTeam: string) => {
    this.numTeamInput = Number(numTeam);
  };

  onAdd = () => {
    if (!this.inputNames) {
      this.errorMessage = 'Name cannot be empty';
      return;
    }
    this.errorMessage = '';
    this.setInputNames.push(this.inputNames);
    this.inputNames = '';
    console.log(this.setInputNames);
  };

  onGenerate = () => {
    if (!this.numTeamInput || this.numTeamInput <= 0) {
      return;
    }
    const allMembers = [...this.setInputNames];

    while (allMembers) {
      for (let i = 0; i < allMembers.length; i++) {
        const randomSelect = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomSelect, 1)[0];
        console.log(randomSelect);
  
        if (this.teams[i]) {
          this.teams[i].push(member)
        }else{
          this.teams[i] = [member]
        }
      }
    }

    
  };
}
