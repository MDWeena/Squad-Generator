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
  currentYear: number = new Date().getFullYear();

  onInput = (addMember: string) => {
    this.inputNames = addMember;
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
    this.setInputNames.push(...this.inputNames.split(','));
    this.inputNames = '';
  };

  onGenerate = () => {
    if (!this.numTeamInput || this.numTeamInput <= 0) {
      this.errorMessage = 'Invalid input';
      return;
    }
    this.errorMessage = '';

    const allMembers = [...this.setInputNames];

    if (this.numTeamInput > allMembers.length) {
      this.errorMessage = 'Teams more than members';
      return;
    }

    while (allMembers.length) {
      for (let i = 0; i < this.numTeamInput; i++) {
        const randomSelect = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomSelect, 1)[0];

        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.numTeamInput = '';
    this.setInputNames = [];
  };
}
