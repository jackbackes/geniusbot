'use strict';

let queryId = {id: 0};

export const queryId_iterate = () => queryId.id++;

export const initialOrigin= {
    queryId: queryId_iterate(),
    coords: {lat: null, lng: null},
    query: null,
    result: null,
    isFetching: false,
    error: null,
    attempt: 0,
    triggerMessageId: null,
    resultMessageId: null,
    success:false,
    messageIds: [],
    previousQueries: []
  }
export const initialDestination= {
    queryId: queryId_iterate(),
    coords: {lat: null, lng: null},
    query: null,
    result: null,
    isFetching: false,
    error: null,
    attempt: 0,
    triggerMessageId: null,
    resultMessageId: null,
    success: false,
    messageIds: [],
    previousQueries: []
  }
export const initialDistance = {
    queryId: queryId_iterate(),
    value: null
  }
