import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getCharactersForGrid } from '@/modules/marvel-characters/services';

import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import Filter from '@/modules/core/components/molecules/Filter';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

export default function CharacterGridPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({
    name: ''
  });

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  async function fetchCharactersAtPage(page = 1) {
    setLoading(true);
    const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
    console.log(data.total);
  }

  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>
      <Filter
        characters={characters}
        query={queryParams}
        onQueryChange={onQueryChange}
        totalItems={totalItems}
      />
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid
          characters={characters.filter(
            (item) =>
              queryParams.name.length < 3 ||
              item.name.toLowerCase().includes(queryParams.name.trim().toLowerCase())
          )}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterGrid({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
    // return <content-type />;
  }

  return characters.map(({ name, image }, index) => (
    <CharacterCard name={name} image={image} key={index} isSkeleton={isLoading} />
  ));
}

{
  /* <div className="content-type"> Error </div>;
<div className="name" aria-live="assertive">
  <span aria-live="assertive">No</span>
  <span aria-live="assertive"> </span>
  <span className="highlight" aria-live="assertive">
    Matches
  </span>
  <span aria-live="assertive"> </span>
  <span className="highlight" aria-live="assertive">
    Found!
  </span>
</div>; */
}
export const EmptyState = () => {
  return (
    <h2>
      <strong> SORRY, NOTHING TO SEE HERE</strong>
    </h2>
  );
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} isSkeleton />);
};
