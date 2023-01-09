import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import SerieFilter from './SerieFilter';

Filter.propTypes = {
  characters: PropTypes.array.isRequired,
  query: { name: PropTypes.string.isRequired },
  onQueryChange: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default function Filter({ characters, query, onQueryChange, totalItems }) {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('');
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const modalAuto = (a) => {
    setSearch(a);
  };
  function Peticion() {
    if (search.length >= 3) {
      return <ModalAuto search={search} modalAuto={modalAuto} />;
    }
  }
  const onToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div>
      <section className="page__component page__component--search page__component--search_bar section__color__ firstComponent">
        <div className="search-bar">
          <div className="typeahead">
            <div className="typeahead">
              <div className="typeahead__icon">
                <span className="icon--svg icon--svg--black-stroke icon--search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="search-icon">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </div>
              <div className="typeahead__container">
                <input
                  className="typeahead__input"
                  type="text"
                  autoComplete="off"
                  placeholder="search"
                  aria-autocomplete="list"
                  value={query.name}
                  onChange={(event) => onQueryChange({ ...query, name: event.target.value })}
                  list="suggestions"
                />
                <datalist id="suggestions">
                  {query.name.length >= 3 &&
                    characters
                      .filter((item) =>
                        item.name.toLowerCase().includes(query.name.trim().toLowerCase())
                      )
                      .slice(0, 5)
                      .map((item) => <option key={item.name}>{item.name}</option>)}
                </datalist>
              </div>
            </div>
          </div>
          <SerieFilter />
        </div>
        <div>
          <h5 className="results_totalItems">{totalItems} RESULTS </h5>
        </div>
      </section>
    </div>
  );
}
