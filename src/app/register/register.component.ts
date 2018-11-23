import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'hm-sign-in',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('player1') player1El: ElementRef;
  @ViewChild('player2') player2El: ElementRef;

  constructor( private router: Router, private gameService: GameService) { }

  ngOnInit() {
  }

  startGame() {
    this.gameService.playerOneName = this.player1El.nativeElement.value;
    this.gameService.playerTwoName = this.player2El.nativeElement.value;
    this.router.navigate(['game']);
  }
}
