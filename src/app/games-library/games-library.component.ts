import { Component, OnInit } from '@angular/core';
import { GamesLibraryStore } from './store/games-library.store';

@Component({
  selector: 'app-games-library',
  templateUrl: './games-library.component.html',
  styleUrls: ['./games-library.component.css']
})
export class GamesLibraryComponent {

  constructor(public readonly store: GamesLibraryStore) { }

  public handleLoadMore(){
    this.store.loadData();
  }
}
