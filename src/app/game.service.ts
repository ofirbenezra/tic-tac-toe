import { Injectable } from '@angular/core';

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
  winningCell: boolean;
}

export type IRow = ICell[];

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public rows: IRow[] = [];
  private _cells: ICell[] = [];
  public gameState: GameState;
  squares = Array(9).fill(null);

  constructor() { }

  init() {
    this.resetGame();
  }

  resetGame() {
    this.rows = [];
    this.gameState = GameState.XTurn;
    this.squares = Array(9).fill(null);
    for (let row = 0; row < 3; row += 1) {
      const newRow = [];
      this.rows.push(newRow);
      for (let col = 0; col < 3; col += 1) {
        const newCell: ICell = {row: row, col: col, state: State.None, winningCell: false};
        newRow.push(newCell);
        this._cells.push(newCell);
      }
    }
  }

  setGameState(row: number, col: number, state: State) {
    const position = col + row * 3;
    this.squares[position] = state;
    if (this.isWinnigMove()) {
      alert('player won' + state);
    }
    this.gameState = (state === State.X) ? GameState.OTurn : GameState.XTurn;

  }

  isWinnigMove() {
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
}
