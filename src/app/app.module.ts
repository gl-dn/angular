import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesLibraryComponent } from './games-library/games-library.component';
import { GamesLibraryStore } from './games-library/store/games-library.store';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'
import { GamesLibraryService } from './games-library/services/games-library.service';
import { CreateGameComponent } from './create-game/create-game.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { GameComponentComponent } from './game-component/game-component.component';

const routes: Routes = [
  { path: 'games-library', component: GamesLibraryComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    GamesLibraryComponent,
    CreateGameComponent,
    GameComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    GamesLibraryService,
    GamesLibraryStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
