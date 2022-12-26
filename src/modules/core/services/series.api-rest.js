import { getAll } from '@/modules/core/services';
import { defaultMapper } from './mapper';

const domain = `series`;

export async function getSeriesList({ mappedBy, queryParams }) {
  return getAll(domain, {
    mappedBy,
    queryParams
  });
}

export function getSeries() {
  return getSeriesList({ mappedBy: defaultMapper });
}
