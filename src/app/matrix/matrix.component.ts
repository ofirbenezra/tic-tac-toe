import { Component, OnInit } from '@angular/core';
import { GameService, GameState, ICell, IRow, State } from '../game.service';

/**
 * @desc MatrixComponent
 * Represents the board/matrix
 * */
@Component({
  selector: 'hm-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  rows: IRow[] = [];

  constructor(private gameService: GameService) {
    this.rows = this.gameService.rows;
  }

  ngOnInit() {
  }

  stateChange(cell: ICell) {
    if (this.gameService.gameState !== GameState.Won) {
      cell.state = this.gameService.gameState === GameState.XTurn ? State.X : State.O;
      this.gameService.setGameState(cell.row, cell.col, cell.state);
    }
  }
}
