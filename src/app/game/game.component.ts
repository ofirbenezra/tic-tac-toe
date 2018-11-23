import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public firstPlayerName: string;
  public secondPlayerName: string;
  gameStateMsg = '';
  gameStateMsg$: Subscription;

  constructor(private router: Router, private gameService: GameService) {
    this.gameService.init();
    this.firstPlayerName = this.gameService.playerOneName;
    this.secondPlayerName = this.gameService.playerTwoName;
    this.gameStateMsg$ = gameService.gameStatusMsg$.subscribe(msg => {
      this.gameStateMsg = msg;
    });
  }

  ngOnInit() {
  }

  restartGame() {
    // this.gameService.resetGame();
    this.router.navigate(['register']);
  }
}
