import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemonTableComponent} from './pokemon/components/pokemon-table/pokemon-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-frontend';
}
