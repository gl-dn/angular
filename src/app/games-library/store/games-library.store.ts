import { Injectable } from "@angular/core";
import { Game } from '../models/game';
import { GamesLibraryService } from '../services/games-library.service';

@Injectable()
export class GamesLibraryStore {
  public games: Game[] = [];

  constructor(private readonly service: GamesLibraryService) {
    this.loadData();
  }

  public loadData(): void {
    this.service.getGames(20, this.games.length).subscribe((games: Game[]) => {
      this.games = this.games.concat(games);
    })
  }

  public createNewGame(name: string): void {
    this.service.createNewGame(new Game('5',name)).subscribe((game: Game) => {
      this.games.push(game);
    })
  }
}