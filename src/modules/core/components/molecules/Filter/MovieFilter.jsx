import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';

export default function MovieFilter() {
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState([]);
  let updatedList = [...checked];

  const handleCheck = (e) => {
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  //Función para el contenedor de películas
  function MovieList() {
    return (
      <div className="movies">
        <ul className="movies__list">
          {movies.map((item, index) => (
            <li key={index} className="movies__list--item">
              <label className="movies__list--text">
                <input value={item} type="checkbox" onChange={handleCheck} />
                {item.toUpperCase()}
              </label>
            </li>
          ))}
        </ul>
        <div className="movies__buttons--container">
          <div
            className={`movies__buttons--left ${
              updatedList.length === 1 && 'movies__buttons--enabled'
            }`}>
            <button className="movies__buttons">Apply</button>
          </div>
          <div className="movies__buttons--right">
            <button className="movies__buttons">Reset</button>
            <button className="movies__buttons" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const close = () => {
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  //Este es el "return" de <MovieFilter />
  return (
    <div className="filters">
      <div className="filters__movie" onClick={handleToggle}>
        <div className="filters__movie--text">Series</div>
        <RiArrowDropDownFill
          className={`filters__movie icon ${toggle && 'filters__movie__icon-open'}`}
        />
      </div>
      {toggle && MovieList()}
    </div>
  );
}

const movies = [
  'Ant-Man',
  'Ant-Man and The Wasp',
  'Ant-Man and The Wasp: Quantumania',
  'Armor Wars',
  'Avengers: Age of Ultron',
  'Avengers: Infinity War',
  'Black Panther',
  'Black Panther: Wakanda Forever',
  'Black Widow',
  'Captain America: Civil War',
  'Captain America: The First Avenger',
  'Captain America: The Winter Soldier',
  'Captain Marvel',
  'Doctor Strange',
  'Doctor Strange in the Multiverse of Madness',
  'Eternals',
  'Guardians of the Galaxy',
  'Guardians of the Galaxy Vol. 2',
  'Iron Man',
  'Iron Man 2',
  'Iron Man 3',
  'Shang-Chi and The Legend of The Ten Rings',
  'Spider-Man: Far From Home',
  'Spider-Man: Homecoming',
  'Spider-Man: No Way Home',
  'The Avengers',
  'The Incredible Hulk',
  'The Marvels',
  'Thor',
  'Thor: Love and Thunder',
  'Thor: Ragnarok',
  'Thor: The Dark World',
  'Untitled Deadpool Movie',
  'X-Men: Dark Phoenix'
];
