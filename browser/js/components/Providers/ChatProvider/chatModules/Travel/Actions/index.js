'use strict';

import { createAction, handleAction, handleActions } from 'redux-actions';


export const FETCH_ORIGIN = createAction('FETCH_ORIGIN')

export const FETCH_DESTINATION = createAction('FETCH_DESTINATION')

export const CALCULATE_DISTANCE = createAction('CALCULATE_DISTANCE')
