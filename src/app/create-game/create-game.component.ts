import { Component } from '@angular/core';
import { GamesLibraryStore } from '../games-library/store/games-library.store';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})

export class CreateGameComponent {

  public name: string;

  constructor(private readonly store: GamesLibraryStore) {

  }

  public saveNewGame(): void {
    this.store.createNewGame(this.name);
  }

}
