import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';
import CharacterSpotlight from 'src/modules/core/components/molecules/CharacterSpotlight';
import { Featured } from './Featured';

export function CharacterPage() {
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>
      <div className="container-section-card">
        <section className="mvl-section-card">
          <img
            className="image-card"
            src="https://tpc.googlesyndication.com/simgad/11660881458541503214"
            alt=""
          />
        </section>
      </div>
      <div className="container">
        <Featured />
        <br></br>
        <br></br>
        <CharacterSpotlight />
        <h1>MARVEL CHARACTERS LIST</h1>
        <CharactersGrid />
      </div>
    </div>
  );
}
