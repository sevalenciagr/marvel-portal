import { getAll } from '@/modules/core/services';
import { defaultMapper } from './mapper';

const domain = `characters/1011334/comics`;

export async function getComicsList({ mappedBy, queryParams }) {
  return getAll(domain, {
    mappedBy,
    queryParams
  });
}
export function getComics() {
  return getComicsList({ mappedBy: defaultMapper });
}

/* traer la imagen de la api */
export function getComicImage(comic) {
  if (!comic.thumbnail) {
    return null;
  }
  const { path, extension } = comic.thumbnail;
  return `${path}.${extension}`;
}
/* trae las propiedades del comic desde la api */
export function mapComicToCard(comic) {
  return {
    title: comic.title,
    image: getComicImage(comic),
    id: comic.id
  };
}
