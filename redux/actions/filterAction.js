import { FILTER_FUN, FILTER_KARIR_EDUKASI, FILTER_PSIKOLOGI } from './types'

export const filterByFun = () => ({
    type: FILTER_FUN,
    payload: 'FUN',
});

export const filterByKarir = () => ({
    type: FILTER_KARIR_EDUKASI,
    payload: 'KARIR_EDUKASI',
});

export const filterByPsikologi = () => ({
    type: FILTER_PSIKOLOGI,
    payload: 'PSIKOLOGI'
})

export const noFilter = () => ({
    type: FILTER_PSIKOLOGI,
    payload: 'NO_FILTER'
})