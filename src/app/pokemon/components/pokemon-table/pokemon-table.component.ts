import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {GetAllPokemonGQL, Pokemon, DeletePokemonGQL} from '../../../../graphql/generated';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-table',
  imports: [],
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.css'
})
export class PokemonTableComponent implements OnInit {
  getAllPokemonGQL = inject(GetAllPokemonGQL);
  deletePokemonGQL = inject(DeletePokemonGQL);
  destroyRef = inject(DestroyRef);

  pokemon = signal<Pokemon[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.loading.set(true);
    this.error.set(null);

    this.getAllPokemonGQL.fetch()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (result) => {
          this.pokemon.set(result.data.pokemon.allPokemon);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load Pokemon');
          this.loading.set(false);
        }
      });
  }

  deletePokemon(id: number) {
    this.deletePokemonGQL.mutate({ input: { pokemonId:id } })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (result) => {
          if (result.data?.deletePokemon.pokemonId) {
            this.pokemon.update(pokemon => pokemon.filter(p => p.id !== id));
          }
        },
        error: (err) => {
          this.error.set('Failed to delete Pokemon');
        }
      });
  }
}
