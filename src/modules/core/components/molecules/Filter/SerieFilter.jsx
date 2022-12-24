import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { getSeries } from 'src/modules/core/services/series.api-rest';
import { useEffect } from 'react';

export default function SerieFilter() {
  const [toggle, setToggle] = useState(false);
  // const [checked, setChecked] = useState([]);
  const [series, setSeries] = useState([]);
  // let updatedList = [...checked];

  useEffect(() => {
    fetchSeries();
  }, []);

  async function fetchSeries() {
    const data = await getSeries();
    setSeries(data.results);
    console.log(data);
  }

  // const handleCheck = (e) => {
  //   if (e.target.checked) {
  //     updatedList = [...checked, e.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(e.target.value), 1);
  //   }
  //   setChecked(updatedList);
  //   console.log(updatedList);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const close = () => {
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  SeriesList.prototypes = {
    id: PropTypes.number,
    title: PropTypes.string
  };
  //Función para el contenedor de películas
  function SeriesList({ title, id }) {
    return (
      <div className="series">
        <ul className="series__list">
          <li id={id} className="series__list--item">
            <label className="series__list--text">
              <input value={id} type="radio" onChange={null} />
              {title.toUpperCase()}
            </label>
          </li>
        </ul>
        <div className="series__buttons--container">
          <div className="series__buttons--left">
            <button className="series__buttons" type="submit" onSubmit={handleSubmit}>
              Apply
            </button>
          </div>
          <div className="series__buttons--right">
            <button className="series__buttons">Reset</button>
            <button className="series__buttons" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  series.map(({ title, id }, index) => {
    <SeriesList title={title} id={id} key={index} />;
  });

  //Este es el "return" de <SerieFilter />
  return (
    <div className="filters">
      <div className="filters__serie" onClick={handleToggle}>
        <div className="filters__serie--text">Series</div>
        <RiArrowDropDownFill
          className={`filters__serie icon ${toggle && 'filters__serie__icon-open'}`}
        />
      </div>
      {toggle && SeriesList()}
    </div>
  );
}

// const series = [
//   'Ant-Man',
//   'Ant-Man and The Wasp',
//   'Ant-Man and The Wasp: Quantumania',
//   'Armor Wars',
//   'Avengers: Age of Ultron',
//   'Avengers: Infinity War',
//   'Black Panther',
//   'Black Panther: Wakanda Forever',
//   'Black Widow',
//   'Captain America: Civil War',
//   'Captain America: The First Avenger',
//   'Captain America: The Winter Soldier',
//   'Captain Marvel',
//   'Doctor Strange',
//   'Doctor Strange in the Multiverse of Madness',
//   'Eternals',
//   'Guardians of the Galaxy',
//   'Guardians of the Galaxy Vol. 2',
//   'Iron Man',
//   'Iron Man 2',
//   'Iron Man 3',
//   'Shang-Chi and The Legend of The Ten Rings',
//   'Spider-Man: Far From Home',
//   'Spider-Man: Homecoming',
//   'Spider-Man: No Way Home',
//   'The Avengers',
//   'The Incredible Hulk',
//   'The Marvels',
//   'Thor',
//   'Thor: Love and Thunder',
//   'Thor: Ragnarok',
//   'Thor: The Dark World',
//   'Untitled Deadpool Movie',
//   'X-Men: Dark Phoenix'
// ];
