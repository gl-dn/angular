import { Component } from '@angular/core';
import { GamesLibraryStore } from '../games-library/store/games-library.store';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent {

  constructor(private readonly store: GamesLibraryStore) { }

  public deleteGame(id: string): void{
    this.store.deleteGame(id);
  }

}
