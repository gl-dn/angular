import { Injectable } from "@angular/core";
import { Game } from '../models/game';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GamesLibraryService {
  constructor(private readonly http: HttpClient) { }
  public getGames(takeCount: number = 10, skipCount: number = 10): Observable<Game[]> {
    return of([
      new Game('1', 'Dota 2'),
      new Game('2', 'Counter Strige Go'),
      new Game('3', 'Dota Underlords'),
      new Game('4', 'Dead by Daylight'),
    ])//this.http.get<Game[]>(takeCount, skipCount);
  }

  public createNewGame(game: Game): Observable<Game> {
    return of(game)
  }//this.http.post<Game>('http://localhost', game);
}