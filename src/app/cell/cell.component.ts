import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {State} from '../game.service';

/**
 * @desc CellComponent
 * Render a single cell component with styling
 */
@Component({
  selector: 'hm-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() public row: number;
  @Input() public col: number;
  @Input() public cellState: State;
  @Output() public stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setCellState() {
    if (this.cellState === State.None) {
        this.stateChange.emit(true);
    }
  }

  public get cellText(): string {
    if (this.cellState === State.O) {
      return 'O';
    }
    if (this.cellState === State.X) {
      return 'X';
    }
  }

}
