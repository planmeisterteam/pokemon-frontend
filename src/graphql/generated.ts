import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
};

export type DeletePokemonInput = {
  pokemonId: Scalars['Int']['input'];
};

export type DeletePokemonPayload = {
  __typename?: 'DeletePokemonPayload';
  pokemonId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePokemon: DeletePokemonPayload;
};


export type MutationDeletePokemonArgs = {
  input: DeletePokemonInput;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  createdAt: Scalars['DateTime']['output'];
  hp: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  types: Array<PokemonType>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PokemonType {
  Bug = 'BUG',
  Dark = 'DARK',
  Dragon = 'DRAGON',
  Electric = 'ELECTRIC',
  Fairy = 'FAIRY',
  Fighting = 'FIGHTING',
  Fire = 'FIRE',
  Flying = 'FLYING',
  Ghost = 'GHOST',
  Grass = 'GRASS',
  Ground = 'GROUND',
  Ice = 'ICE',
  Normal = 'NORMAL',
  Poison = 'POISON',
  Psychic = 'PSYCHIC',
  Rock = 'ROCK',
  Steel = 'STEEL',
  Water = 'WATER'
}

export type Query = {
  __typename?: 'Query';
  pokemon: Array<Pokemon>;
};

export type DeletePokemonMutationVariables = Exact<{
  input: DeletePokemonInput;
}>;


export type DeletePokemonMutation = { __typename?: 'Mutation', deletePokemon: { __typename?: 'DeletePokemonPayload', pokemonId: number } };

export type GetAllPokemonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPokemonQuery = { __typename?: 'Query', pokemon: Array<{ __typename?: 'Pokemon', id: number, name: string, hp: number, imageUrl?: string | null, types: Array<PokemonType>, createdAt: any, updatedAt: any }> };

export const DeletePokemonDocument = gql`
    mutation DeletePokemon($input: DeletePokemonInput!) {
  deletePokemon(input: $input) {
    pokemonId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePokemonGQL extends Apollo.Mutation<DeletePokemonMutation, DeletePokemonMutationVariables> {
    document = DeletePokemonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllPokemonDocument = gql`
    query GetAllPokemon {
  pokemon {
    id
    name
    hp
    imageUrl
    types
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllPokemonGQL extends Apollo.Query<GetAllPokemonQuery, GetAllPokemonQueryVariables> {
    document = GetAllPokemonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }