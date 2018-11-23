import { TestBed } from '@angular/core/testing';

import { GameService, State } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it('should return isWiningMove true', () => {
    const service: GameService = TestBed.get(GameService);
    service.squares[0] = State.X;
    service.squares[3] = State.X;
    service.squares[6] = State.X;
    expect(service.isWiningMove()).toBeTruthy();
  });

  it('should return isWiningMove false', () => {
    const service: GameService = TestBed.get(GameService);
    service.squares[0] = State.X;
    service.squares[2] = State.X;
    service.squares[6] = State.X;

    expect(service.isWiningMove()).toBeFalsy();
  });
});
