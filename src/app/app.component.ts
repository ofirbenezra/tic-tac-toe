import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  playersForm: FormGroup;
  player1Name: FormControl;
  player2Name: FormControl;

  constructor(fb: FormBuilder) {
    this.playersForm = fb.group({
      player1Name: this.player1Name,
      player2Name: this.player2Name
    });
  }
}
