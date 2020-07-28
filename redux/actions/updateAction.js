import { UPDATE_PROFILE } from './types'

export const updatePhoto = (newData) => ({
    type: UPDATE_PROFILE,
    payload: newData,
});