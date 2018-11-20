import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'hm-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private router: Router, private gameService: GameService) { }

  ngOnInit() {
  }

  startGame() {
    this.gameService.init();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'firstPlayerName': 'aaa',
        'secondPlayerName': 'bbb'
      }
    };
    this.router.navigate(['game'], navigationExtras);
  }
}
