import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum GameState {
  XTurn = 0,
  OTurn = 1,
  Won = 2,
  Draw = 3
}

export enum State {
  None = 0,
  X = 1,
  O = 2
}

export interface ICell {
  row: number;
  col: number;
  state: State;
}

export type IRow = ICell[];

@Injectable({
  providedIn: 'root'
})
/**
 * @desc GameService service
 * Handle all state changes and all application logic
 */
export class GameService {
  public playerOneName: string;
  public playerTwoName: string;
  public rows: IRow[] = [];
  private _cells: ICell[] = [];
  public gameState: GameState;
  isWinner = false;
  squares = Array(9).fill(null);
  public gameStatusMsg$: BehaviorSubject<string>;

  constructor() {
    this.gameStatusMsg$ = new BehaviorSubject<string>('');
  }

  init() {
    this.resetGame();
  }

  resetGame() {
    this.rows = [];
    this.isWinner = false;
    this.gameState = GameState.XTurn;
    this.gameStatusMsg$.next(this.getGameStatusMessage(this.playerOneName));
    this.squares = Array(9).fill(null);
    for (let row = 0; row < 3; row += 1) {
      const newRow = [];
      this.rows.push(newRow);
      for (let col = 0; col < 3; col += 1) {
        const newCell: ICell = {row: row, col: col, state: State.None};
        newRow.push(newCell);
        this._cells.push(newCell);
      }
    }
  }

  /**
   * @desc Set the game state and emit the status message to consumers
   */
  setGameState(row: number, col: number, state: State) {
    const position = col + row * 3;
    let player;
    if (!this.isWinner && !this.squares[position] ) {
      this.squares[position] = state;
      if (this.isWiningMove()) {
        this.isWinner = true;
        this.gameState = GameState.Won;
        player = (state === State.X) ? this.playerOneName : this.playerTwoName;
      } else {
        this.gameState = (state === State.X) ? GameState.OTurn : GameState.XTurn;
        player = (this.gameState === GameState.XTurn) ? this.playerOneName : this.playerTwoName;
      }

      this.gameStatusMsg$.next(this.getGameStatusMessage(player));
    }
  }

  /**
   * @desc Check if this is a winning move by checking if all variations
   */
  isWiningMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
      [0, 4, 8], [2, 4, 6]             // diagonal
    ];
    for (const condition of conditions) {
      if ( this.squares[condition[0]]
        && this.squares[condition[0]] === this.squares[condition[1]]
        && this.squares[condition[1]] === this.squares[condition[2]]) {
        return true;
      }
    }
    return false;
  }

  private getGameStatusMessage(player: string) {
    return this.isWinner ? `Player ${player} has won!` :
      `Player ${player}'s turn`;
  }
}
