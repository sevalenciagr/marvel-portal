import React, { useState, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { getSeries } from 'src/modules/core/services/series.api-rest';

export default function SerieFilter() {
  const [toggle, setToggle] = useState(false);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  async function fetchSeries() {
    const data = await getSeries();
    setSeries(data.results);
    console.log(data);
  }

  const onToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const onClose = () => {
    setToggle(false);
  };

  function onReset() {
    console.log('Reset');
  }

  function onApply() {
    console.log('onApply');
  }

  return (
    <div className="filters">
      <div className="filters__serie" onClick={onToggle}>
        <div className="filters__serie--text">Series</div>
        <RiArrowDropDownFill
          className={`filters__serie icon ${toggle && 'filters__serie__icon-open'}`}
        />
      </div>
      <div className={toggle ? 'series' : 'null'}>
        {toggle && <SeriesList series={series} />}
        {toggle && <SeriesButtons onClose={onClose} onApply={onApply} onReset={onReset} />}
      </div>
    </div>
  );
}
//Funciones para las series
const renderSeries = (series) => {
  const renderSerie = (serie) => (
    <li key={serie.id} className="series__list--item">
      <Serie serie={serie} />
    </li>
  );
  return series.map(renderSerie);
};

const Serie = ({ serie }) => {
  return (
    <label className="series__list--text">
      <input value={serie.id} type="radio" name="Marvel serie" />
      {serie.title}
    </label>
  );
};

const SeriesList = ({ series }) => {
  return <ul className="series__list">{renderSeries(series)}</ul>;
};

function SeriesButtons({ onClose, onReset, onApply }) {
  return (
    <div className="series__buttons--container">
      <div className="series__buttons--left">
        <button className="series__buttons" onClick={onApply}>
          Apply
        </button>
      </div>
      <div className="series__buttons--right">
        <button className="series__buttons" onClick={onReset}>
          Reset
        </button>
        <button className="series__buttons" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

SeriesList.propTypes = {
  series: PropTypes.array
  // id: PropTypes.number,
  // title: PropTypes.string
};

SeriesButtons.propTypes = {
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  onApply: PropTypes.func
};

Serie.propTypes = {
  serie: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string
};
