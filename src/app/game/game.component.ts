import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'hm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public firstPlayerName: string;
  public secondPlayerName: string;

  constructor(private route: ActivatedRoute, private gameService: GameService) {
    // this.gameService.init();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.firstPlayerName = params['firstPlayerName'];
      this.secondPlayerName = params['secondPlayerName'];
    });


  }
}
