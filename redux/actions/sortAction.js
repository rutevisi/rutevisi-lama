import { SORT_BARU, SORT_POPULER } from './types'

export const sortByNew = () => ({
    type: SORT_BARU,
    payload: 'NEW',
});

export const sortByPopular = () => ({
    type: SORT_POPULER,
    payload: 'POPULAR',
});